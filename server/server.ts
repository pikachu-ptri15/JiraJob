import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import pkg, { Pool } from 'pg';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/dist')));

// Initialize Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE username = $1', [
      username,
    ]);
    if (!user.rows.length) {
      res.status(400).json({ error: 'Invalid username or password' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      res.status(400).json({ error: 'Invalid username or password' });
      return;
    }
    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error('Login error:', (error as any).message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/get-jobs", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT job_id AS id, 
             job_title AS "jobTitle", 
             company_name AS "companyName", 
             location, 
             notes, 
             droppable_id AS "droppableId" 
      FROM jobs
    `);
    res.status(200).json({ jobs: result.rows });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/save-jobs", async (req, res) => {
  try {
    const { jobs } = req.body;

    if (!Array.isArray(jobs)) {
      return res.status(400).json({ error: "Invalid job data" });
    }

    
    const query = `
      INSERT INTO jobs (job_id, job_title, company_name, location, notes, droppable_id)
      VALUES 
        ${jobs.map((_, i) => `($${i * 6 + 1}, $${i * 6 + 2}, $${i * 6 + 3}, $${i * 6 + 4}, $${i * 6 + 5}, $${i * 6 + 6})`).join(", ")}
      ON CONFLICT (job_id) 
      DO UPDATE SET 
        job_title = EXCLUDED.job_title,
        company_name = EXCLUDED.company_name,
        location = EXCLUDED.location,
        notes = EXCLUDED.notes,
        droppable_id = EXCLUDED.droppable_id;
    `;

    const values = jobs.flatMap((job) => [
      job.id,
      job.jobTitle,
      job.companyName,
      job.location,
      job.notes,
      job.droppableId,
    ]);

    await pool.query(query, values);

    res.status(200).json({ message: "Jobs updated successfully" });
  } catch (error) {
    console.error("Error updating jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Serve your built React application
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// Unknown route error handler
app.use('*', (req: Request, res: Response) =>
  res.status(404).send('Page not found')
);

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

export default app;

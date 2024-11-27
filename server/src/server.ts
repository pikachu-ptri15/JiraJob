import express from 'express';
import cors from 'cors';


const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: `Sudo test!` });
})

const PORT = 5000;
app.listen(PORT, () => `Server running on port: ${PORT}`)

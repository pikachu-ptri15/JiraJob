import React, {useState} from 'react';
import NewJob from './NewJob';
import JobDisplay from './JobDisplay';
import './JobDisplay.css';

const App: React.FC = () => {
    const [jobs, setJobs] = useState<{ jobTitle: string; companyName: string; location: string, notes: string }[]>([]);

    const addJob = (newJob: { jobTitle: string; companyName: string; location: string, notes: string}) => {
        setJobs([...jobs, newJob]);
    };



    return (
        <div>
            <h1>Job List</h1>
            <NewJob addJob={addJob}/>
            <div className="job-list">
                {jobs.map((job, index) => (
                    <JobDisplay 
                    key={index}
                    companyName={job.companyName}
                    jobTitle={job.jobTitle}
                    location={job.location}
                    notes={job.notes}
                    />
                ))}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex", // Flexbox layout to stack items vertically
    flexDirection: "column", // Stack items in a column
    height: "100vh", // Full screen height
    margin: "0", // Remove margin
  },
  topSpace: {
    height: "20%", // Top white space takes up 20% of the screen height
    backgroundColor: "white", // Make it white
  },
  buttonContainer: {
    position: "absolute",
    top: "12%", // Adjust this to be higher if needed
    left: "2%", // 2% white space from the left edge of the screen
    },
  modalButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  columnsContainer: {
    display: "flex", // Flexbox layout to arrange columns horizontally
    justifyContent: "space-between", // Space columns evenly
    alignItems: "stretch", // Ensure columns stretch to the same height
    width: "96%", // Columns container takes up 96% of the screen width
    margin: "0 auto", // Center the columns container horizontally
    flex: "1", // Take up the remaining space (after the top and bottom white spaces)
    gap: "10px", // Space between columns
  },
  bottomSpace: {
    height: "5%", // Bottom white space takes up 5% of the screen height
    backgroundColor: "white", // Make it white
  },
  item: {
    padding: "10px", // Padding for items inside the columns
    backgroundColor: "#e0e0e0", // Background color for items
    borderRadius: "4px", // Border radius for item styling
    textAlign: "center", // Center the text inside items
    marginBottom: "10px", // Adds 10px space between items inside each column
  },
};


export default App;

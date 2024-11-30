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

export default App;

import React from 'react'

//type or interface?
interface JobDisplayProps {
    jobTitle: string;
    companyName: string;
    location: string;
    notes: string;
  }

  const JobDisplay: React.FC<JobDisplayProps> = ({ jobTitle, companyName, location, notes }) => {
    return (
      <div className="job-box">
        <p className="company-name">{companyName}</p>
        <p className="job-title">{jobTitle}</p>
        <p className="location">{location}</p>
        <p className="notes">{notes}</p>
      </div>
    );
  };
  
  export default JobDisplay;
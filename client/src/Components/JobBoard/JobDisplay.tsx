import React from 'react'

//type or interface?
interface JobDisplayProps {
    jobTitle: string;
    companyName: string;
    location: string;
    notes: string;
    time: number;
  }

  const JobDisplay: React.FC<JobDisplayProps> = ({ jobTitle, companyName, location, notes, time }) => {
    return (

      <div className="job-box" id = {time.toString()}>
        <p className="company-name">{companyName}</p>
        <p className="job-title">{jobTitle}</p>
        <p className="location">{location}</p>
        <p className="notes">{notes}</p>
        <div className='job-edit' onClick = {() => {
          console.log('time: ', document.getElementById(time.toString()));
        }}>Edit</div>
      </div>
    );
  };
  
  export default JobDisplay;
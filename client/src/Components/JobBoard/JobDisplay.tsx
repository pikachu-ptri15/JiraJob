import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import './JobDisplay.css';


interface JobDisplayProps {
  job: {
    jobTitle: string;
    companyName: string;
    location: string;
    notes: string;
    id: string;
    droppableId: string;
  };
  index: number;
}

const JobDisplay: React.FC<JobDisplayProps> = ({ job, index }) => {
  return (
    <div>
      <Draggable draggableId={job.id} index={index}>
        {(provided: DraggableProvided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className='job-box'
          >
            <div className='job-title'>{job.jobTitle}</div>
            <div className='company-name'>{job.companyName}</div>
            <div className='location'>{job.location}</div>
            <div className='notes'>{job.notes}</div>
            <div
              className='jobEditBut'
              onClick={() => {
                console.log('Edit Clicked');
              }}
            >
              Edit
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default JobDisplay;

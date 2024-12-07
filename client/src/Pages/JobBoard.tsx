import React, { useState, useEffect } from "react";
import Column from "../Components/JobBoard/ProgressColumn";
import Modal from "../Components/JobBoard/Modal";
import JobDisplay from "../Components/JobBoard/JobDisplay";
import SaveButton from "../Components/JobBoard/SaveButton"
import "../Components/JobBoard/JobDisplay.css";
import "./JobBoard.css";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DroppableProps,
} from "react-beautiful-dnd";

// React Beautiful DnD replacement for strict mode
export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};




const JobBoard: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [jobs, setJobs] = useState<
    {
      jobTitle: string;
      companyName: string;
      location: string;
      notes: string;
      id: string;
      droppableId: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3001/get-jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const addJob = (newJob: {
    jobTitle: string;
    companyName: string;
    location: string;
    notes: string;
    droppableId: string;
  }) => {
    const newJobWithId = { id: `job-${jobs.length + 1}`, ...newJob };
    setJobs([...jobs, newJobWithId]);
  };

  // Dragging logic
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return; // Reset if not dropped in an acceptable area

    setJobs((prevJobs) => {
      const draggedJobIndex = prevJobs.findIndex(
        (job) =>
          job.droppableId === source.droppableId &&
          jobs.filter((j) => j.droppableId === source.droppableId)[
            source.index
          ]?.id === job.id
      );

      if (draggedJobIndex === -1) return prevJobs; // If the job is not found, return the state as is

      const updatedJobs = Array.from(prevJobs);

      const [removedJob] = updatedJobs.splice(draggedJobIndex, 1);

      removedJob.droppableId = destination.droppableId;

      updatedJobs.splice(destination.index, 0, removedJob);

      return updatedJobs;
    });
  };

  const handleSaveAll = async () => {
    try {
      console.log('jobs', jobs)
      const response = await fetch("http://localhost:3001/save-jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobs }), 
      });

      const data = await response.json();

      console.log('data', data);
      if (!response.ok) {
        throw new Error("Failed to save jobs");
      }

      console.log("Jobs saved successfully!");
    } catch (error) {
      console.error("Error saving jobs:", error);
    }
  };

  return (
    <div className="job-board-container">
      <div className="top-space"></div>
      <div className="button-container">
        <button className="modal-button" onClick={showModal}>
          + New Job
        </button>
      </div>
      <Modal isVisible={isModalVisible} onClose={hideModal} addJob={addJob} />
      <SaveButton jobs={jobs} onSave={handleSaveAll}/>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns-container">
          <Column>
            <StrictModeDroppable droppableId="applied-jobs" type="group">
              {(provided: DroppableProvided) => (
                <div
                  className="job-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h1>Applied</h1>
                  {jobs
                    .filter((job) => job.droppableId === "applied-jobs")
                    .map((job, index) => (
                      <JobDisplay key={job.id} job={job} index={index} />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          </Column>

          <Column>
            <StrictModeDroppable droppableId="interviewing-jobs" type="group">
              {(provided: DroppableProvided) => (
                <div
                  className="job-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h1>Interviewing</h1>
                  {jobs
                    .filter((job) => job.droppableId === "interviewing-jobs")
                    .map((job, index) => (
                      <JobDisplay key={job.id} job={job} index={index} />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          </Column>

          <Column>
            <StrictModeDroppable droppableId="outcome-jobs" type="group">
              {(provided: DroppableProvided) => (
                <div
                  className="job-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h1>Outcome</h1>
                  {jobs
                    .filter((job) => job.droppableId === "outcome-jobs")
                    .map((job, index) => (
                      <JobDisplay key={job.id} job={job} index={index} />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          </Column>
        </div>
      </DragDropContext>
      <div className="bottom-space"></div>
    </div>
  );
};

export default JobBoard;

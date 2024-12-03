import React, { useState } from 'react';
import EditModal from './EditModel';
import Modal from './Modal';

//type or interface?
interface JobDisplayProps {
  jobTitle: string;
  companyName: string;
  location: string;
  notes: string;
  time: number;
}

const JobDisplay: React.FC<JobDisplayProps> = ({
  jobTitle,
  companyName,
  location,
  notes,
  time,
}) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const showEditModal = () => setIsEditModalVisible(true);
  const hideEditModal = () => setIsEditModalVisible(false);
  const editJob = () => {
    console.log('hi');
  };

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const [jobs, setJobs] = useState<
  //   {
  //     jobTitle: string;
  //     companyName: string;
  //     location: string;
  //     notes: string;
  //     time: number;
  //   }[]
  // >([]);

  // const addJob = (newJob: {
  //   jobTitle: string;
  //   companyName: string;
  //   location: string;
  //   notes: string;
  //   time: number;
  // }) => {
  //   setJobs([...jobs, newJob]);
  // };
  // const showModal = () => setIsModalVisible(true);
  // const hideModal = () => setIsModalVisible(false);

  return (
    <div className='job-box' id={time.toString()}>
      <EditModal
        isVisible={isEditModalVisible}
        onClose={hideEditModal}
        editJob={editJob}
      />
      {/* <Modal isVisible={isModalVisible} onClose={hideModal} addJob={addJob} />; */}
      <p className='company-name'>{companyName}</p>
      <p className='job-title'>{jobTitle}</p>
      <p className='location'>{location}</p>
      <p className='notes'>{notes}</p>
      <div
        className='job-edit'
        // onClick={() => {
        //   console.log(time);
        // }}
        onClick={showEditModal}
        // onClick={()=>{console.log(document.getElementById(time.toString()))}}
      >
        Edit
      </div>
    </div>
  );
};

export default JobDisplay;

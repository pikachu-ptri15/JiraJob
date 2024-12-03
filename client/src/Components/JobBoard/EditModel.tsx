import React, { useState } from 'react';
import EditJob from './EditJob';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  editJob: (editJob: {
    jobTitle: string;
    companyName: string;
    location: string;
    notes: string;
    time: number;
  }) => void;
}

const EditModal: React.FC<ModalProps> = ({ isVisible, onClose, editJob }) => {
  if (!isVisible) return null;

  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    location: '',
    notes: '',
    time: Date.now(),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  //TODO add mutiple choice field for location(remote, hybrid, on-site)
  // const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({ ...formData, location: e.target.value });
  //   };

  //should all fields be required?
  const handleEditJob = () => {
    if (
      formData.jobTitle &&
      formData.companyName &&
      formData.location &&
      formData.notes
    ) {
      editJob(formData);
      setFormData({
        jobTitle: '',
        companyName: '',
        location: '',
        notes: '',
        time: 0,
      });
      onClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <EditJob editJob={editJob} onClose={onClose} />
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ff3b3b',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default EditModal;

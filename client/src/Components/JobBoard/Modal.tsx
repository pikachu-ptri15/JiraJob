import React, {useState} from "react";
import NewJob from "./NewJob";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  addJob: (newJob: { jobTitle: string; companyName: string; location: string, notes: string, droppableId: string}) => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, addJob }) => {
  if (!isVisible) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <NewJob addJob={addJob} onClose={onClose}/>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "relative", // To allow absolute positioning of the Close button inside it
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    position: "absolute", // Position relative to modal
    top: "5px", // 10px from the top of modalContent
    right: "10px", // 10px from the right of modalContent
    fontSize: "16px", // Size of the "X" button
    background: "none", // Remove default background
    border: "none", // Remove default border
    color: "red", // Light gray color for the "X"
    cursor: "pointer", // Pointer cursor on hover
    padding: "5px", // Optional padding to make the button more clickable
  },
};

export default Modal;
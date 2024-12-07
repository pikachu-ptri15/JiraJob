import React from "react";
import './SaveButton.css'

type SaveButtonProps = {
    jobs: { id: string; jobTitle: string; companyName: string; location: string; notes: string; droppableId: string }[];
    onSave: () => void;
  };

const SaveButton: React.FC<SaveButtonProps> = ({ jobs, onSave }) => {
    const handleOnSave = () => {
        onSave(); 
      };

  return (
    <div>
      <button 
        type="submit" 
        className="save-button"  // Apply the class here
        onClick={handleOnSave}
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;

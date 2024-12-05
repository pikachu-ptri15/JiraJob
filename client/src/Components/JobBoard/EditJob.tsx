import React, {useState} from "react";

type NewJobProps = {
    addJob: (newJob: { jobTitle: string; companyName: string; location: string, notes: string, droppableId: string }) => void;
    onClose: () => void;
};

const EditJob: React.FC<NewJobProps> = ({addJob, onClose}) => {
    const [formData, setFormData] = useState({
        companyName: "",
        jobTitle: "",
        location: "",
        notes: "",
        droppableId: "applied-jobs",
        
    });

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value } = e.target;
        setFormData({...formData, [id]: value});
    };
    //TODO add mutiple choice field for location(remote, hybrid, on-site)
    // const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormData({ ...formData, location: e.target.value });
    //   };

    //should all fields be required?
    const handleAddJob = () => {
        if (formData.jobTitle && formData.companyName && formData.location && formData.notes) {
          addJob(formData); 
          setFormData({ jobTitle: '', companyName: '', location: '', notes: '', droppableId: "applied-jobs" });
          onClose();
        } else {
          alert('Please fill out all fields.');
        }
      };

    return (
        <div>
            <div>
                <label htmlFor="companyName">Company Name:</label>
                <input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter the company name"
                />
            </div>
            <div>
            <label htmlFor="jobTitle">Job Title:</label>
            <input
                id="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Enter job title"
            />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                />
            </div>
            <div>
            <label htmlFor="notes">Notes:</label>
            <input
                id="notes"
                type="text"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Notes"
            />
            </div>
            <div>
                <button onClick={handleAddJob}>Add Job</button>
            </div>
        </div>
    );
};

export default EditJob;
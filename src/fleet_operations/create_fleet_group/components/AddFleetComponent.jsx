import  { useState } from 'react';
import './styles/AddFleetComponent.scss';

const fleets = ['Fleet E', 'Fleet F', 'Fleet G', 'Fleet H', 'Fleet I'];

const AddFleetComponent = ({ groupName = 'Group 1', onClose, onAdd }) => {
  const [selectedFleets, setSelectedFleets] = useState([]);

  const handleToggleFleet = (fleet) => {
    setSelectedFleets((prev) =>
      prev.includes(fleet)
        ? prev.filter((f) => f !== fleet)
        : [...prev, fleet]
    );
  };

  const handleAdd = () => {
    onAdd(selectedFleets);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h5>Add Fleet to {groupName}</h5>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {fleets.map((fleet) => (
            <label key={fleet} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedFleets.includes(fleet)}
                onChange={() => handleToggleFleet(fleet)}
              />
              <span>{fleet}</span>
            </label>
          ))}
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleAdd}>
            Add Selected Fleet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFleetComponent;

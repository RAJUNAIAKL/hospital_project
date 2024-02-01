import React, { useEffect, useState } from 'react';

const AddEditDepartmentPopup = ({ isOpen, onClose, onSave, editData }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Pre-fill form fields if editing
    if (editData) {
      setName(editData.Name || '');
      setDescription(editData.Description || '');
    } else {
      // Clear form fields if adding
      setName('');
      setDescription('');
    }
  }, [editData]);

  const handleSave = () => {
    onSave({
      id: editData ? editData.id : 0,
      Name: name,
      Description: description,
    });

    onClose();
  };

  return (
    <div className={`popup ${isOpen ? 'open' : 'closed'}`}>
      <h2>{editData ? 'Edit' : 'Add'} Department</h2>
      <form onSubmit={handleSave}>
        <label htmlFor="departmentName">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="departmentDescription">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type="submit">Save</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddEditDepartmentPopup;

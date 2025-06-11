import React, { useState } from 'react';

export default function PatientForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    contact: '',
    prescriptions: '',
    clinicalNotes: '',
    medications: '',
    labResultsFile: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <legend>🧍 Patient Demographics</legend>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Contact</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
      </fieldset>

      <fieldset className="form-group">
        <legend>💊 Prescription History</legend>
        <label>Prescriptions</label>
        <textarea name="prescriptions" value={formData.prescriptions} onChange={handleChange} placeholder="List prescriptions like Drug - Dose - Duration" rows="4" />
      </fieldset>

      <fieldset className="form-group">
        <legend>📝 Clinical Notes</legend>
        <label>Notes</label>
        <textarea name="clinicalNotes" value={formData.clinicalNotes} onChange={handleChange} rows="5" />
      </fieldset>

      <fieldset className="form-group">
        <legend>💊 Medication Management</legend>
        <label>Medications</label>
        <input type="text" name="medications" value={formData.medications} onChange={handleChange} />
      </fieldset>

      <fieldset className="form-group">
        <legend>🧪 Lab Results</legend>
        <label>Upload Lab Result (PDF)</label>
        <input type="file" name="labResultsFile" onChange={handleChange} accept="application/pdf" />
      </fieldset>

      <button type="submit">Add Patient</button>
    </form>
  );
}




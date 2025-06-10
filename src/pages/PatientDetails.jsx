import React from 'react';

export default function PatientDetails({ patient, onBack }) {
  return (
    <div className="details-card animate-fade-in">
      <h2>Patient Details</h2>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>DOB:</strong> {patient.dob}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Contact:</strong> {patient.contact}</p>
      <button onClick={onBack}>Back to Dashboard</button>
    </div>
  );
}
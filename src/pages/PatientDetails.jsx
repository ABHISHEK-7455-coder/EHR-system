import React from 'react';

export default function PatientDetails({ patient, onBack }) {
  return (
    <div className="details-card animate-fade-in">
      <h2>Patient Details</h2>

      <fieldset className="form-group">
        <legend>🧍 Patient Demographics</legend>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>DOB:</strong> {patient.dob}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
      </fieldset>

      <fieldset className="form-group">
        <legend>💊 Prescription History</legend>
        <ul>
          {patient.prescriptions?.map((p, i) => (
            <li key={i}>{p.drug} - {p.dose} - {p.duration}</li>
          ))}
        </ul>
      </fieldset>

      <fieldset className="form-group">
        <legend>📝 Clinical Notes</legend>
        <div className="clinical-notes-box">
          <div className="clinical-notes-content">
            {patient.clinicalNotes || <em>No clinical notes provided.</em>}
          </div>
        </div>
      </fieldset>

      <fieldset className="form-group">
        <legend>💊 Medication Management</legend>
        <p><strong>Medications:</strong> {patient.medications}</p>
      </fieldset>

      <fieldset className="form-group">
        <legend>🧪 Lab Results</legend>
        {patient.labResultsFile ? (
          <p><strong>Lab Results:</strong> <a href={patient.labResultsFile} target="_blank" rel="noopener noreferrer">View PDF</a></p>
        ) : (
          <p><strong>Lab Results:</strong> None</p>
        )}
      </fieldset>

      <button onClick={onBack}>Back</button>
    </div>
  );
}

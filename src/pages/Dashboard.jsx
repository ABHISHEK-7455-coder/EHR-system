import React from 'react';
import PatientForm from '../components/PatientForm';

export default function Dashboard({ patients = [], onAdd, onView, onDelete, onEdit, isListMode }) {
  return (
    <div className="dashboard animate-fade-in">
      <h1>{isListMode ? 'Patient List' : 'Dashboard'}</h1>
      {!isListMode && <PatientForm onAdd={onAdd} />}
      {isListMode && (
        <ul className="patient-list">
          {patients.map((patient) => (
            <li key={patient.id} className="patient-item">
              <span className="patient-name">{patient.name}</span>
              <div className="patient-actions">
                <button onClick={() => onEdit(patient.id)}>Edit</button>
                <button onClick={() => onDelete(patient.id)}>Delete</button>
                <button onClick={() => onView(patient.id)}>Know More</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
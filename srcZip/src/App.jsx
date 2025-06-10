import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import PatientDetails from './pages/PatientDetails';
import NavBar from '../../src/components/NavBar';

export default function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const viewPatient = (id) => {
    const patient = patients.find((p) => p.id === id);
    setSelectedPatient(patient);
  };

  const goBack = () => setSelectedPatient(null);

  return (
    <div className="app-container">
      <NavBar />
      <div className="content">
        {selectedPatient ? (
          <PatientDetails patient={selectedPatient} onBack={goBack} />
        ) : (
          <Dashboard patients={patients} onAdd={addPatient} onView={viewPatient} />
        )}
      </div>
    </div>
  );
}
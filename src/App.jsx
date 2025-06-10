import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import PatientDetails from './pages/PatientDetails';
import NavBar from './components/NavBar';

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

  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const editPatient = (id) => {
    const newName = prompt('Enter new name:');
    if (newName) {
      setPatients(
        patients.map((p) =>
          p.id === id ? { ...p, name: newName } : p
        )
      );
    }
  };

  const goBack = () => setSelectedPatient(null);

  return (
    <div className="app-container">
      <NavBar />
      <div className="content">
        {selectedPatient ? (
          <PatientDetails patient={selectedPatient} onBack={goBack} />
        ) : (
          <Dashboard
            patients={patients}
            onAdd={addPatient}
            onView={viewPatient}
            onDelete={deletePatient}
            onEdit={editPatient}
          />
        )}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import PatientDetails from './pages/PatientDetails';
import NavBar from './components/NavBar';
import Header from './assets/Header';

export default function App() {
  const [patients, setPatients] = useState([]);
  const [showPatientList, setShowPatientList] = useState(false);
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
    const patientToEdit = patients.find((p) => p.id === id);
    const updatedData = prompt('Update Prescription History:', patientToEdit.prescriptionHistory);
    if (updatedData !== null) {
      setPatients(
        patients.map((p) =>
          p.id === id ? { ...p, prescriptionHistory: updatedData } : p
        )
      );
    }
  };

  const goBack = () => {
    if (selectedPatient) {
      setSelectedPatient(null);
    } else {
      setShowPatientList(false);
    }
  };

  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <div className="top-actions">
        {!showPatientList && (
          <>
            <Dashboard onAdd={addPatient} />
            <button className="info-btn" onClick={() => setShowPatientList(true)}>Show Patient Info</button>
          </>
        )}
      </div>
      <div className="main-content">
        {showPatientList ? (
          selectedPatient ? (
            <PatientDetails patient={selectedPatient} onBack={goBack} />
          ) : (
            <>
              <button onClick={goBack}>Back</button>
              <Dashboard
                patients={patients}
                onView={viewPatient}
                onDelete={deletePatient}
                onEdit={editPatient}
                isListMode={true}
              />
            </>
          )
        ) : null}
      </div>
    </div>
  );
}
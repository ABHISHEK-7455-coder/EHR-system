import React, { useState } from 'react';

export default function PatientForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: Date.now().toString() });
    setFormData({ name: '', dob: '', gender: '', contact: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card animate-fade-in">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="dob" placeholder="D.O.B" type="date" value={formData.dob} onChange={handleChange} required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
      <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
      <button type="submit">Add Patient</button>
    </form>
  );
}


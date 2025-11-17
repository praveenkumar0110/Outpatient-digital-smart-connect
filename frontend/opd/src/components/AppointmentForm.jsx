import { useState, useEffect } from "react";
import api from "../api/axios";

export default function AppointmentForm({ prefillDoctor, onBooked }) {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    doctor: prefillDoctor || "",
    patient: "",
    date: "",
    time_slot: "",
  });

  useEffect(() => {
    api.get("doctors/").then((res) => setDoctors(res.data));
    api.get("patients/").then((res) => setPatients(res.data));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token_number = Math.floor(Math.random() * 100) + 1;
    await api.post("appointments/", { ...form, token_number });
    alert(`✅ Appointment booked! Token: ${token_number}`);
    onBooked && onBooked();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h3>🗓️ Book Appointment</h3>

      <select
        name="doctor"
        onChange={handleChange}
        value={form.doctor}
        disabled={!!prefillDoctor}
        required
      >
        <option value="">Select Doctor</option>
        {doctors.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name} ({d.specialization})
          </option>
        ))}
      </select>

      <select name="patient" onChange={handleChange} required>
        <option value="">Select Patient</option>
        {patients.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time_slot" onChange={handleChange} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

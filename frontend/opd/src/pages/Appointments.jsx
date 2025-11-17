import { useEffect, useState } from "react";
import api from "../api/axios";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const loadData = () => {
    api.get("appointments/").then((res) => setAppointments(res.data));
  };

  useEffect(loadData, []);

  return (
    <div>
      <h2>📋 Appointments</h2>
      <AppointmentForm onBooked={loadData} />
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            Token #{a.token_number} – Patient {a.patient} → Doctor {a.doctor}
          </li>
        ))}
      </ul>
    </div>
  );
}

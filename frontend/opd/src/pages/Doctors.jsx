import { useLocation } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";

export default function Doctors() {
  const location = useLocation();
  const doctor = location.state?.doctor;

  if (!doctor)
    return <p>No doctor selected. Go to <a href="/hospitals">Hospitals</a>.</p>;

  return (
    <div>
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization} — {doctor.experience} yrs</p>
      <p>Available: {doctor.available_from} - {doctor.available_to}</p>

      <AppointmentForm prefillDoctor={doctor.id} />
    </div>
  );
}

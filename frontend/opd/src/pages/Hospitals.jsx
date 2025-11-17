import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import HospitalCard from "../components/HospitalCard";
import DoctorCard from "../components/DoctorCard";

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  const [selected, setSelected] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("hospitals/").then((res) => setHospitals(res.data));
  }, []);

  const handleSelectHospital = (hospital) => {
    setSelected(hospital);
    api.get(`doctors/?hospital=${hospital.id}`).then((res) => setDoctors(res.data));
  };

  const handleSelectDoctor = (doctor) => {
    navigate(`/doctors/${doctor.id}`, { state: { doctor } });
  };

  return (
    <div>
      <h2>🏥 Hospitals</h2>
      {!selected && hospitals.map((h) => (
        <HospitalCard key={h.id} hospital={h} onSelect={handleSelectHospital} />
      ))}
      {selected && (
        <>
          <h3>Doctors at {selected.name}</h3>
          {doctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} onSelect={handleSelectDoctor} />
          ))}
          <button onClick={() => setSelected(null)}>🔙 Back</button>
        </>
      )}
    </div>
  );
}

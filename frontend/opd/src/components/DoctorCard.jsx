export default function DoctorCard({ doctor, onSelect }) {
  return (
    <div
      onClick={() => onSelect(doctor)}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        background: "#f7f7ff",
      }}
    >
      <h4>{doctor.name}</h4>
      <p>{doctor.specialization} — {doctor.experience} yrs</p>
      <small>🕒 Available: {doctor.available_time || "9 AM - 5 PM"}</small>
    </div>
  );
}

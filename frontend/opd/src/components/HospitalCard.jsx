export default function HospitalCard({ hospital, onSelect }) {
  return (
    <div
      onClick={() => onSelect(hospital)}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        background: "#fff",
      }}
    >
      <h3>{hospital.name}</h3>
      <p>{hospital.address}</p>
      <p>⭐ {hospital.rating}</p>
    </div>
  );
}

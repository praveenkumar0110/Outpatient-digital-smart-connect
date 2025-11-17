import { Link } from "react-router-dom";

export default function Navbar() {
  const style = {
    background: "#007bff",
    padding: "1rem",
    color: "white",
    display: "flex",
    gap: "1rem"
  };

  return (
    <nav style={style}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/hospitals" style={{ color: "white" }}>Hospitals</Link>
      <Link to="/doctors" style={{ color: "white" }}>Doctors</Link>
      <Link to="/appointments" style={{ color: "white" }}>Appointments</Link>
    </nav>
  );
}

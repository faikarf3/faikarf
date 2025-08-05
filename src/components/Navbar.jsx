import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <h2>
        <Link to="/">Faikar</Link>
      </h2>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setIsOpen(false)}
        >
          About me
        </NavLink>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Dino<span>Naur</span>
        </Link>

        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            <i className="uil uil-estate"></i>
            Home
          </NavLink>

          <NavLink to="/explorer" className="navbar-link">
            <i className="uil uil-anchor"></i>
            Explorer
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

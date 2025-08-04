import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h2><Link to="/">Faikar</Link></h2>
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/About" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About me</NavLink>
            </div>
        </nav>
    );
}



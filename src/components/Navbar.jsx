import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h2><Link to="/">Faikar</Link></h2>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/About" className="nav-link">About me</Link>
            </div>
        </nav>
    );
}



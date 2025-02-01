import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
     const { isLoggedIn } = useAuth();
    return (
        <>
            <div id="page-content-wrapper">
                {/* Header */}
                <header className="navbar sticky">
                    <div className="container">
                        <button className="btn btn-primary toggle-btn" id="menu-toggle" aria-label="Toggle Sidebar">
                            <i className="fas fa-bars"></i>
                        </button>
                        <NavLink to="/" className="logo">Ed<span style={{ color: "#4CAF50" }}>Tech</span></NavLink>
                        <div className="search-bar">
                            <input type="text" placeholder="Search for anything..." />
                        </div>
                        <nav>
                            <ul className="nav-links">
                                <li><NavLink to="/login" className="cta-button">login</NavLink></li>
                            </ul>
                            <button className="dark-mode-toggle" aria-label="Toggle dark mode">
                                <i className="fas fa-moon"></i>
                            </button>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;

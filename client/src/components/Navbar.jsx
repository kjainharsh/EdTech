import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <>
      <div id="page-content-wrapper">
        {/* Header */}
        <header className="navbar sticky">
          <div className="container">
            <button
              className="btn btn-primary toggle-btn"
              id="menu-toggle"
              aria-label="Toggle Sidebar"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>
            <NavLink to="/" className="logo">
              Ed<span style={{ color: "#4CAF50" }}>Tech</span>
            </NavLink>
            <div className="search-bar">
              <input type="text" placeholder="Search for anything..." />
            </div>
            <nav>
              <ul className="nav-links">
                <li>
                  <NavLink to="/login" className="cta-button">
                    login
                  </NavLink>
                </li>
              </ul>
              <button
                className="dark-mode-toggle"
                aria-label="Toggle dark mode"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </nav>
          </div>
        </header>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={toggleSidebar}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleSidebar}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={toggleSidebar}>
          Contact
        </NavLink>
        <NavLink to="/login" onClick={toggleSidebar}>
          Login
        </NavLink>
        <NavLink to="/signup" onClick={toggleSidebar}>
          Sign Up
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;

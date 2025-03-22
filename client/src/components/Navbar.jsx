import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { FaShoppingCart, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { isLoggedIn, cartCount, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    navigate("/logout"); // Redirect to the logout page
  };

  return (
    <>
      <div id="page-content-wrapper">
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
            <nav>
              <ul className="nav-links">
                {/* Main Links */}
                <div className="nav-main-links">
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/notifications" className="notification-icon">
                      <FaBell size={24} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className="cart-icon">
                      <FaShoppingCart size={24} />
                      <span className="cart-count">{cartCount}</span>
                    </NavLink>
                  </li>
                </div>
                {/* Auth Links */}
                <div className="nav-auth-links">
                  {isLoggedIn && (
                    <li className="profile-dropdown">
                      <FaUserCircle
                        size={24}
                        className="profile-icon"
                        onClick={toggleDropdown}
                      />
                      {isDropdownOpen && (
                        <div className="dropdown-menu">
                          <NavLink to="/myprofile" onClick={toggleDropdown}>
                            My Profile
                          </NavLink>
                          <button onClick={handleLogout}>Logout</button>
                        </div>
                      )}
                    </li>
                  )}
                  {!isLoggedIn && (
                    <li>
                      <NavLink to="/login" className="cta-button">
                        Login
                      </NavLink>
                    </li>
                  )}
                </div>
              </ul>
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
        <NavLink to="/courses" onClick={toggleSidebar}>
          Courses
        </NavLink>
        <NavLink to="/notifications" onClick={toggleSidebar}>
          Notifications
        </NavLink>
        <NavLink to="/contact" onClick={toggleSidebar}>
          Contact
        </NavLink>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to="/myprofile">My Profile</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;

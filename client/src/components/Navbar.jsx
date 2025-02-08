import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { isLoggedIn, cartCount } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
            <div className="search-bar">
              <input type="text" placeholder="Search for anything..." />
            </div>
            <nav>
              <ul className="nav-links">
                <li>
                  <NavLink to="/cart" className="cart-icon">
                    <FaShoppingCart size={24} />
                    <span className="cart-count">{cartCount}</span>
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <li>
                    <NavLink to="/logout" className="cta-button">
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/login" className="cta-button">
                      Login
                    </NavLink>
                  </li>
                )}
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
        <NavLink to="/contact" onClick={toggleSidebar}>
          Contact
        </NavLink>
        {isLoggedIn ? (
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
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

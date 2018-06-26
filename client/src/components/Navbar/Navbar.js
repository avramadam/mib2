import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Message in a Bottle
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
              window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/login"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/signup"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Signup" className="nav-link">
            Sign Up
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/sendbottle"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/sendbottle" className="nav-link">
            Send Message
          </Link>


        </li>

        <li
          className={
            window.location.pathname === "/saved"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/saved" className="nav-link">
            View Saved
          </Link>
        </li>
      </ul>
    </div>
  </nav>

);

export default Navbar;

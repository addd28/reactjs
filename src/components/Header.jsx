import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img
          src="/image/favicon-fpt.ico"
          alt="FPT Logo"
          className="logo-icon"
        />
        <span>FPT Aptech</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Booking</a></li>
          <li><a href="#">Locations</a></li>
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="topbar">
        <p>[email: info@cvdsnepal.org.np]</p>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/ourteam">Our Team</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/donate">Donate(CTA)</Link>
          </li>

          <li>
            <Link to ="/activities">Activities</Link>
          </li>

          <li>
            <Link to ="/ProjectPartnership">ProjectPartnership</Link>
          </li>

          <li>
            <Link to ="/Objectives">Objectives</Link>
          </li>

          <li>
            <Link to ="Gallery">Gallery</Link>
          </li>

          <li>
            <Link to ="Supportus">Supportus</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

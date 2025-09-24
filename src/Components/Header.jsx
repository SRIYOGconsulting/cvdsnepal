import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="topbar">
        <p>[email1]</p>
      </div>

      <nav>
        <ul className="nav-links" style={{display:"flex", gap:"20px", listStyleType:"none", padding:"0px"}}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

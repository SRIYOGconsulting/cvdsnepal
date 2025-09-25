import React from "react";
import { Link } from "react-router-dom";
import { appData } from "../constants";
import Logo from './Logo'; 

const Header = () => {
  return (
    <header className="bg-black text-white w-full">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-5 py-2">
        <a href={`mailto:${appData.email1}`} className="text-sm hover:text-gray-300">
          {appData.email1}
        </a>
        <div className="flex items-center">
          <Logo />
        </div>
      </div>

      <nav className="py-2">
        <ul  className="flex justify-center space-x-8 list-none p-0">
          <li>
            <Link to="/" className="text-sm hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="text-sm hover:text-gray-300">Contact Us</Link>
          </li>
          <li>
            <Link to="/team" className="text-sm hover:text-gray-300">Our Team</Link>
          </li>
          <li>
            <Link to="/about" className="text-sm hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-sm hover:text-gray-300">Projects</Link>
          </li>
          <li>
            <Link to="/donate" className="text-sm hover:text-gray-300">Donate(CTA)</Link>
          </li>

          <li>
            <Link to ="/activities" className="text-sm hover:text-gray-300">Activities</Link>
          </li>

          <li>
            <Link to ="/ProjectPartnership" className="text-sm hover:text-gray-300">Project Partnership</Link>
          </li>

          <li>
            <Link to ="/Objectives" className="text-sm hover:text-gray-300">Objectives</Link>
          </li>

          <li>
            <Link to ="Gallery" className="text-sm hover:text-gray-300">Gallery</Link>
          </li>

          <li>
            <Link to ="Support" className="text-sm hover:text-gray-300">Support Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




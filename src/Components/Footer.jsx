import React from "react";
import { Link } from "react-router-dom";
import { appData } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 font-sans">
      <div className="flex flex-wrap justify-around max-w-6xl mx-auto">
        <div>
          <h3 className="text-lg font-bold mb-2">Ways to Give</h3>
          <ul className="list-none p-0">
            <li>
              {/* <Link to="/donate" className="text-blue-600 hover:underline">
                Donate Now
              </Link> */}
              <li>
                <Link to="/donate" >
                  Donations
                </Link>
              </li>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Take Action</h3>
          <ul className="list-none p-0">
            <li>
              <Link to="/partners" >
                Partners
              </Link>
            </li>
            <li>
            <Link to="/messages" >
              Messages
            </Link>
          </li>
            <li>
            <Link to="/support" >
              Support Us
            </Link>
          </li>
            
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="list-none p-0">
              <li>
                <Link
                  to="/pastactivities"
                 
                >
                  Past Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/upcomingactivities"
                 
                >
                  Upcoming Activities
                </Link>
              </li>
              <li>
                <Link to="/videos" >
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/faq" >
                  FAQ
                </Link>
              </li>
              <li>

                <Link to='/objectives' >
                  Objectives
                </Link>
              </li>
            
            
            
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p>
            {appData.address1}, {appData.address2}, {appData.city}
            <br />
            Phone: {appData.phone1}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
            Live Chat
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <input
          type="email"
          placeholder="Email*"
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Join
        </button>
      </div>

      <div className="text-center mt-4">
        <p>Copyright © 2025 {appData.organizationName}. All Rights Reserved.</p>
        <p className="mt-2">
          Build With:{" "}
          <Link to="/BoardPress" className="text-blue-400 hover:underline">
            BoardPress
          </Link>
        </p>

        <div className="mt-4">
          <a href="#" className="text-blue-400 mx-2 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 mx-2 hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

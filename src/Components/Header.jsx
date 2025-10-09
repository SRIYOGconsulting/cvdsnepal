import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { appData } from "../constants";
import logo from "../assets/cvdslogo.png";

const Header = () => {
  const barHeight = "60px";
  const navigate = useNavigate();

  return (
    <header className="w-full absolute top-10 left-0 z-50 bg-transparent">
      {/* Bottom Navbar */}
      <nav className="bg-transparent text-[#f2eeec]">
        <div
          className="max-w-8xl mx-auto flex items-center justify-between px-12"
          style={{ height: barHeight }}
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="CVDS Logo"
              style={{ height: "63px", marginLeft: "45px" }}
              className="rounded-l-lg"
            />
          </Link>
          {/* Navbar Links */}
          <ul className="flex gap-3 list-none p-0 font-medium text-[#f2eeec]">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Team", path: "/team" },
              { name: "Projects", path: "/projects" },
              { name: "Activities", path: "/activities" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="hover:text-[#159EEC] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Donate Button */}
          <button
            onClick={() => navigate("/donate")}
            className="bg-[#d9d9d9] px-8 py-2 text-black font-semibold hover:bg-blue-500 transition rounded-[0.5vw]"
          >
            Donate
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

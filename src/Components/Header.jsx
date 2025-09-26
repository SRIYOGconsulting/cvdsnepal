
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { appData } from "../constants";
import Logo from "./Logo";

const Header = () => {
  const barHeight = "60px"; // same height for top and bottom bars
  const navigate = useNavigate(); // hook for navigation

  return (
    <header className="w-full shadow-md">
      {/* Top Bar (Logo left, Email right) */}
      <div
        className="bg-[#FCFEFE] text-[#1F2B6C] border-b flex items-center justify-between px-6"
        style={{ height: barHeight }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Email */}
        <a
          href={`mailto:${appData.email1}`}
          className="text-sm font-medium hover:text-[#159EEC] transition"
        >
          {appData.email1}
        </a>
      </div>

      {/*  Bottom Navbar */}
      <nav
        className="bg-[#1F2B6C] flex items-center justify-between px-6"
        style={{ height: barHeight }}
      >
        {/* Navbar Links */}
        <ul className="flex flex-wrap gap-6 list-none p-0 font-medium text-[#FCFEFE]">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Members & Staffs", path: "/team" },
            { name: "Projects", path: "/projects" },
            { name: "Partnership", path: "/projectPartnership" },
            { name: "Activities", path: "/activities" },
            { name: "Gallery", path: "/gallery" },
            { name: "Objectives", path: "/objectives" },
            { name: "Support Us", path: "/support" },
            { name: "Contact Us", path: "/contact" },
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

        {/*  CTA Donate Button on Right */}
        <button
          onClick={() => navigate("/donate")}
          className="bg-[#159EEC] px-8 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition"
        >
          Donate
        </button>
      </nav>
    </header>
  );
};

export default Header;

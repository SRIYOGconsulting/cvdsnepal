
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/cvdslogo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const headerClasses = `w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
    isHomePage && !scrolled
      ? "bg-transparent text-white shadow-none" 
      : "bg-white text-[#1F2B6C] shadow-md"       
  }`;

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CVDS Logo"
            style={{ height: "63px", marginLeft: "45px" }}
            className={`rounded-lg ${
              isHomePage && !scrolled ? "brightness-200" : ""
            }`} // Logo bright on top of home hero
          />
        </Link>

        {/* Navbar Links */}
        <ul className="flex items-center gap-8 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Team", path: "/team" },
            { name: "Projects", path: "/projects" },
            { name: "Activities", path: "/activities" },
            { name: "Contact", path: "/contact" },
          ].map((item, i) => {
            const active = location.pathname === item.path; 

           
            const linkClasses = active
              ? isHomePage && !scrolled
                ? "text-[#00D1FF]"      
                : "text-[#159EEC]"     
              : isHomePage && !scrolled
              ? "text-white hover:text-[#00D1FF]" 
              : "text-[#1F2B6C] hover:text-[#159EEC]"; 

            return (
              <li key={i}>
                <Link to={item.path} className={`transition ${linkClasses}`}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Donate Button */}
        <button
          onClick={() => navigate("/donate")}
          className={`font-semibold px-6 py-2 rounded-md transition ${
            isHomePage && !scrolled
              ? "border border-white text-white hover:bg-white hover:text-black"
              : "bg-[#1F2B6C] text-white hover:bg-[#159EEC]"
          }`}
        >
          Donate
        </button>
      </nav>
    </header>
  );
};

export default Header;

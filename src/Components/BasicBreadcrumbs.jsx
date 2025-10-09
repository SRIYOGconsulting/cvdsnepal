
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BasicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Hide breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

   const pageTitleMap = {
    pastactivities: "Past Activities",
    upcomingactivities: "Upcoming Activities",
    support: "Support Us",
    partners: "Partners",
    messages: "Messages",
    videos: "Videos",
    faq: "FAQ",
    objectives: "Objectives",
    donate: "Donations",
  };

 const formatName = (name) => {
    if (pageTitleMap[name.toLowerCase()]) {
    
      return pageTitleMap[name.toLowerCase()];
    }

    return name
      .replace(/([a-z])([A-Z])/g, "$1 $2") // split camelCase
      .replace(/-/g, " ") // replace hyphens with spaces
      .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize words
  };
  return (
    <div className="bg-[#1F2B6C] py-12 text-center relative overflow-hidden pt-24">
      {/* Decorative gradient overlay (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E5E4E8] to-transparent opacity-20 pointer-events-none"></div>

      {/* Page Title */}
       <h1 className="text-4xl font-bold text-[#FCFEFE] mb-4 relative z-10">
        {formatName(pathnames[pathnames.length - 1])}
      </h1>

      {/* Breadcrumb navigation */}
      <nav className="flex justify-center items-center text-sm relative z-10">
        <Link
          to="/"
          className="text-[#159EEC] hover:text-[#02DDCD] transition-colors"
        >
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={to} className="flex items-center">
              <span className="mx-2 text-[#BFD2F8]">›</span>
              {isLast ? (
                 <span className="text-[#FCFEFE] font-medium">
                  {formatName(value)}
                </span>
              ) : (
                 <Link
                  to={to}
                  className="text-[#159EEC] hover:text-[#02DDCD] transition-colors"
                >
                  {formatName(value)}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default BasicBreadcrumbs;


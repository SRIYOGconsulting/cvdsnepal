
import React from "react";
import { Link, useLocation } from "react-router-dom";
// FIXED Header layout and basic breadcrumbs alignment 
const BasicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Hide breadcrumbs on home page
  if (location.pathname === "/") return null;

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
     <section className="bg-[#1F2B6C] text-white mt-[72px] py-12">
      <div className="max-w-7xl mx-auto px-8">
        
      
        <h1 className="text-4xl font-bold">
          {formatName(pathnames[pathnames.length - 1])}
        </h1>
      </div>
    </section>
  );
};

export default BasicBreadcrumbs;




import React from "react";
import { Link, useLocation } from "react-router-dom";

const BasicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Hide breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="bg-[#1F2B6C] py-12 text-center relative overflow-hidden">
      {/* Decorative gradient overlay (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E5E4E8] to-transparent opacity-20 pointer-events-none"></div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-[#FCFEFE] mb-4 relative z-10">
        {pathnames[pathnames.length - 1]
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())}
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
                  {value
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-[#159EEC] hover:text-[#02DDCD] transition-colors"
                >
                  {value
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
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

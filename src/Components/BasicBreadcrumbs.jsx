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
    <div className="bg-gray-800 py-12 text-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-white mb-2">
        {pathnames[pathnames.length - 1]
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      <nav className="flex justify-center items-center text-gray-300 text-sm">
        <Link to="/">Home</Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          const isLast = index === pathnames.length - 1;
          return (
            <span key={to} className="flex items-center">
              <span className="mx-2 text-gray-400">›</span>
              {isLast ? (
                <span className="text-white font-medium">
                  {value
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </span>
              ) : (
                <Link to={to} className="hover:text-white transition">
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

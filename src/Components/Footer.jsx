import React , {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { appData } from "../constants";

// ScrollToTop Component for Footer Links
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);
  return null;
};

const Footer = () => {
  return (
    // Added responsive padding (py-10 px-6) instead of fixed p-6
    <footer className="bg-black text-white py-10 px-6 font-sans">
       <ScrollToTop />
       {/* Changed flex layout to responsive grid layout for better stacking */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-2">Ways to Give</h3>
          {/* Added space-y-2 for vertical spacing between list items  */}
          
          <ul className="list-none p-0 space-y-2">
            
              {/* <Link to="/donate" className="text-blue-600 hover:underline">
                Donate Now
              </Link> */}
              <li>
               
                <Link to="/donate" >
                  Donations
                </Link>
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

{/* Made this section responsive using flex + gap classes */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 text-center">
        <input
          type="email"
          placeholder="Email*"
          className="p-2 border border-gray-300 rounded text-black w-full sm:w-auto"
        />

   
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Join
        </button>
      </div>

      <div className="text-center mt-4">
        <p>Copyright © 2025 {appData.organizationName}. All Rights Reserved.</p>
        <p className="mt-2">
          Built With:{" "}
          <Link to="/BoardPress" className="text-blue-400 hover:underline">
            BoardPress
          </Link>
        </p>
{/* Made links stack on small screens and inline on larger ones  */}
         {/*  Made links stack on small screens and inline on larger ones */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-1">
          <a href="#" className="text-blue-400 mx-2 hover:underline">
            Privacy Policy
          </a>
          {/*  Added vertical separator visible only on larger screens */}
          <span className="hidden sm:inline">|</span>
          <a href="#" className="text-blue-400 mx-2 hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;














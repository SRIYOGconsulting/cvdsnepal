
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { appData } from "../constants";
import { Twitter, Facebook, Youtube, Twitch } from "lucide-react";
import cvdsLogo from "../assets/cvdslogo.png";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-black font-sans">
      <ScrollToTop />

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {/* About Section */}
        <div className="col-span-2">
          <img
            src={cvdsLogo}
            alt="CVDS Nepal Logo"
            className="w-36 h-auto mb-4 cursor-pointer hover:opacity-80 transition rounded-lg"
            onClick={handleLogoClick}
          />
          <h3 className="font-semibold mb-2 text-lg">CVDS Nepal</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Conflict Victim and Disabled Society (CVDS) is located in
            Shankharapur Municipality-6, Shalambutar, Sankhu, Kathmandu. Since
            2005, the organization has been supporting people with disabilities
            in Nepal through the Rehabilitation Center for Children with
            Cerebral Palsy (CP) project.
          </p>
        </div>

        {/* Browse More */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Browse More</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/FAQ" className="hover:underline">FAQs</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/videos" className="hover:underline">Videos</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/messages" className="hover:underline">Message</Link></li>
            <li><Link to="/donate" className="hover:underline">Donate</Link></li>
           <li><Link to="/support" className="hover:underline">Support Us</Link></li>

          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Community</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/team" className="hover:underline">Our Community</Link></li>
            <li><Link to="/partners" className="hover:underline">Partners</Link></li>
            <li><Link to="/objectives" className="hover:underline">Objectives</Link></li>
          </ul>
        </div>

        {/* Organization */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Organization</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="hover:underline">Our Projects</Link></li>
            <li><Link to="/upcomingactivities" className="hover:underline">Upcoming Activities</Link></li>
            <li><Link to="/pastactivities" className="hover:underline">Past Activities</Link></li>
     
          </ul>
        </div>
      </div>

      {/* Social + Subscribe (same line) */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-5">
            <Twitter className="w-7 h-7 cursor-pointer transition p-1 rounded" />
            <Facebook className="w-7 h-7 cursor-pointer transition p-1 rounded" />
            <Youtube className="w-7 h-7 cursor-pointer transition p-1 rounded" />
            <Twitch className="w-7 h-7 cursor-pointer transition p-1 rounded" />
          </div>

          {/* Subscribe Box */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-lg px-4 py-2 w-72 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#051213]"
            />
            <button className="bg-white border border-gray-400 text-black px-6 py-2 rounded-lg hover:bg-[#159EEC] hover:text-white transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 text-center md:text-left space-y-2 md:space-y-0">
          <p>
            © 2025 {appData.organizationName || "CVDS Nepal"}. All Rights Reserved. Built with{" "}
            <span className="text-[#0b195e] font-medium">BroadPress</span>.
          </p>
          <div className="flex space-x-5">
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

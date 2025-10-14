import React , {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { appData } from "../constants";
import {
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Twitch,
  Github,
} from "lucide-react";

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
    <footer className="bg-gray-100 text-black p-6 font-sans">
       <ScrollToTop />
      <div className="grid md:grid-cols-6 max-w-6xl mx-auto py-8">
        {/* About us section */}
        <div className="col-span-1 md:col-span-2">
          <img src="../assets/cvdslogo.png" alt="logo"/>
          <h3 className="font-semibold mb-2">
            CVDS Nepal
          </h3>
          <p className="text-sm leading-relaxed">
            Conflict Victim and Disable Society (Conflict Victim and Disabled Society) is located at Shankharapur Municipality-6, Shalambutar, Sankhu, Kathmandu. This organization has been supporting people with disability in Nepal since 2005, providing food, clothes, shelter, and basic care through the Rehabilitation Center for Children with disability due to Cerebral Palsy (CP) project.
          </p><br/><br/>
          <div className="grid md:grid-cols-6 max-w-6xl mx-auto py-8">
            <div className="flex col-span-1 md:col-span-3">
            <Twitter className="w-5 h-5 hover:text-[#0B5D5E] cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-[#0B5D5E] cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-[#0B5D5E] cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-[#0B5D5E] cursor-pointer" />
            <Twitch className="w-5 h-5 hover:text-[#0B5D5E] cursor-pointer" />
            <Github className="w-5 h-5 hover:text-[#0B5D5E] cursor-pointer" />
          </div>
          <div className="flex col-span-1 md:col-span-2 px-10">
        <input
          type="email"
          placeholder="Enter your email address"
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-80 text-gray-700"
        />
        <button className="flex bg-black text-white px-6 py-2 rounded-lg  col-span-1 md:col-span-1">
          Subscribe
        </button>
      </div>
          </div>
        </div>
        {/*Browse more */}
        <div  className="col-span-1 md:col-span-1 px-10">
          <h3 className="font-bold mb-3">Browse More</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/FAQ" className="hover:underline">FAQs</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          </ul>
        </div>
        {/* Resources */}
        <div  className="col-span-1 md:col-span-1">
          <h3 className="font-bold mb-3">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/messages" className="hover:underline">Message</Link></li>
            <li><Link to="/donate" className="hover:underline">Payment</Link></li>
          </ul>
        </div>
        {/* Supports */}
        <div  className="col-span-1 md:col-span-1">
          <h3 className="font-bold mb-3">Organisation</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/case-studies" className="hover:underline">Community</Link></li>
            <li><Link to="/partners" className="hover:underline">Partners</Link></li>
          </ul>
        </div>
        {/* Organization */}
        <div  className="col-span-1 md:col-span-1">
          <h3 className="font-bold mb-3">Organisation</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/donate" className="hover:underline">Donate Now</Link></li>
            <li><Link to="/projects" className="hover:underline">Our Projects</Link></li>
          </ul>
        </div>
      </div>
       
      {/* bottom */}
       <div className="mt-8 border-t border-gray-200 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6">
          <p>
            © 2025 {appData.organizationName || "Organization Name"}. All Rights
            Reserved. Built With:{" "}
            <span className="text-[#0B5D5E] font-medium">BroadPress</span>
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;

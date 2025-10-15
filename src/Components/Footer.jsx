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
    <footer className="bg-gray-100 text-black p-6">
  <ScrollToTop />

  {/* Top grid */}
  <div className="grid md:grid-cols-6 max-w-6xl mx-auto py-8 gap-6">
    {/* About us */}
    <div className="col-span-1 md:col-span-2">
      <img src="../src/assets/cvdslogo.png" alt="logo" className="h-12"/>
      <p className="font-semibold mb-2 text-[15px]">Adding the Wheel in Wheelchair, Restoring Dignity</p>
      <p className="text-sm leading-relaxed text-justify">
        Conflict Victim and Disable Society (Conflict Victim and Disabled
        Society) is located at Shankharapur Municipality-6, Shalambutar,
        Sankhu, Kathmandu. This organization has been supporting people with
        disability in Nepal since 2005, providing food, clothes, shelter, and
        basic care through the Rehabilitation Center for Children with
        disability due to Cerebral Palsy (CP) project.
      </p>
    </div>

    {/* Browse more */}
    <div className="col-span-1 md:col-span-1 px-4">
      <h3 className="font-bold mb-3">Browse More</h3>
      <ul className="space-y-1 text-sm">
        <li><Link to="/FAQ" className="hover:underline">FAQs</Link></li>
        <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
        <li><Link to="/team" className="hover:underline">Our Team</Link></li>
        <li><Link to="/pastactivities" className="hover:underline">Past Activities</Link></li>
        <li><Link to="/upcomingactivities" className="hover:underline">Upcoming Activities</Link></li>
      </ul>
    </div>

    {/* Resources */}
    <div className="col-span-1 md:col-span-1 px-4">
      <h3 className="font-bold mb-3">Resources</h3>
      <ul className="space-y-1 text-sm">
        <li><Link to="/messages" className="hover:underline">Message</Link></li>
        <li><Link to="/donate" className="hover:underline">Payment</Link></li>
      </ul>
    </div>

    {/* Support */}
    <div className="col-span-1 md:col-span-1 px-4">
      <h3 className="font-bold mb-3">Support</h3>
      <ul className="space-y-1 text-sm">
        <li><Link to="/case-studies" className="hover:underline">Community</Link></li>
        <li><Link to="/partners" className="hover:underline">Partners</Link></li>
      </ul>
    </div>

    {/* Organization */}
    <div className="col-span-1 md:col-span-1 px-4">
      <h3 className="font-bold mb-3">Organisation</h3>
      <ul className="space-y-1 text-sm">
        <li><Link to="/donate" className="hover:underline">Donate Now</Link></li>
        <li><Link to="/projects" className="hover:underline">Our Projects</Link></li>
      </ul>
    </div>
  </div>

  {/* icons + email + subscribe */}
  <div>
    <div className="max-w-5xl mx-auto flex md:flex-row justify-between items-center">
      {/* Social Icons */}
      <div className="flex gap-4">
        <Twitter className="w-5 h-5 hover:text-[#1F2B6C] cursor-pointer" />
        <Facebook className="w-5 h-5 hover:text-[#1F2B6C] cursor-pointer" />
        <Linkedin className="w-5 h-5 hover:text-[#1F2B6C] cursor-pointer" />
        <Youtube className="w-5 h-5 hover:text-[#1F2B6C] cursor-pointer" />
        <Twitch className="w-5 h-5 hover:text-[#1F2B6C] cursor-pointer" />
        <Github className="w-5 h-5 hover:text-[#1F2B6C] cursor-pointer" />
      </div>

      {/* Email input */}
      <input
        type="email"
        placeholder="Enter your email address"
        className="border border-gray-300 rounded px-4 py-2 w-full md:w-96 text-gray-700"
      />

      {/* Subscribe button */}
      <button className="bg-black text-white px-6 py-2 rounded-lg">
        Subscribe
      </button>
    </div>
  </div>

  {/* Copyright bottom */}
  <div className="mt-6 pt-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>
        © 2025 {appData.organizationName || "Organization Name"}. All Rights
        Reserved. Built With:{" "}
        <span className="text-[#0B5D5E] font-medium">BroadPress</span>
      </p>
      <div className="flex space-x-2">
        <Link to="/terms" className="hover:underline">Terms of Service |</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy |</Link>
        <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;














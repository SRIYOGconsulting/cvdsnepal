
import React from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-[#1F2B6C] text-[#FCFEFE] pt-14 font-sans">
      {/* Top Section with multiple columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {/* Ways to Give */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ways to Give</h3>
          <ul className="space-y-3 mt-3">
            <li><Link to="/donate" className="hover:text-[#159EEC]">Donate Now</Link></li>
          </ul>
        </div>

        {/* Take Action */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Take Action</h3>
          <ul className="space-y-3 mt-3">
            <li><Link to="/partners" className="hover:text-[#159EEC]">Partners</Link></li>
            <li><Link to="/staffs" className="hover:text-[#159EEC]">Staffs</Link></li>
            <li><Link to="/members" className="hover:text-[#159EEC]">Members</Link></li>
            <li><Link to="/messages" className="hover:text-[#159EEC]">Messages</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 mt-3">
            <li><Link to="/activities" className="hover:text-[#159EEC]">Activities</Link></li>
            <li><Link to="/donations" className="hover:text-[#159EEC]">Donations</Link></li>
            <li><Link to="/pastactivities" className="hover:text-[#159EEC]">Past Activities</Link></li>
            <li><Link to="/upcomingactivities" className="hover:text-[#159EEC]">Upcoming Activities</Link></li>
            <li><Link to="/videos" className="hover:text-[#159EEC]">Videos</Link></li>
            <li><Link to="/faq" className="hover:text-[#159EEC]">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm leading-relaxed mb-3">
            Shalambutar, Sankhu, Kathmandu
            <br />Phone: +977-9851160868
          </p>
          <input
            type="email"
            placeholder="Your Email*"
            className="p-3 w-full border border-gray-300 rounded-md focus:outline-none text-[#1F2B6C]"
          />
        </div>
      </div>

      {/* Divider */}
      {/* Removed divider */}

      {/* Bottom Section */}
      <div className="text-center text-sm mt-6 px-6 bg-[#1F2B6C] py-4 rounded-md">
        <p className="text-[#FCFEFE]">Copyright © 2025 {appData.organizationName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

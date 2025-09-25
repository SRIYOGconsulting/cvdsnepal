import React from 'react'
import { appData } from '../constants'
import { useOutletContext } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Contactus = () => {
  const { organizationName, pathname } = useOutletContext();
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6" >
       {/* Section Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Contact {organizationName || "Us"}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We’re here to help! Get in touch with us and we’ll respond as soon as
          possible.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white shadow-lg rounded-2xl p-10">
        {/* Left Side Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form and our team will get back to you shortly.
            We’re excited to hear from you!
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              {appData.phone1 || "+977-9851160868"}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              {appData.email1 || "info@cvdsnepal.org.np"}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              {appData.city || "Kathmandu"}
            </li>
          </ul>
        </div>

        {/* Right Side Form */}
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};


export default Contactus;

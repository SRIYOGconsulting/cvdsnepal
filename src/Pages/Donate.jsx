import { useState, useEffect } from "react";
import { Heart,Search } from "lucide-react";
import img1 from "../assets/images.jpg";


export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(25000);
  const [frequency, setFrequency] = useState("once");

  const amounts = [200000, 120000, 50000, 25000, 12000, 6000];

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-6xl mx-auto px-4 py-12">
    
      <div className="w-full grid md:grid-cols-2 gap-8">
        {/* ===== LEFT SIDE - DONATE FORM ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border flex flex-col justify-between">
          <div>
            {/* Frequency Toggle */}
            <div className="flex space-x-2 mb-6">
              <button
                className={`flex-1 py-2 rounded-lg border ${
                  frequency === "once"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => setFrequency("once")}
              >
                One-time
              </button>
              <button
                className={`flex-1 py-2 rounded-lg border flex items-center justify-center space-x-1 ${
                  frequency === "monthly"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => setFrequency("monthly")}
              >
                <Heart size={16} />
                <span>Monthly</span>
              </button>
            </div>

            {/* Suggested Amounts */}
            <p className="text-gray-600 mb-3">Your generous donation</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`border rounded-lg py-2 text-sm ${
                    selectedAmount === amt
                      ? "bg-indigo-100 border-indigo-600 text-indigo-600 font-semibold"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Rs {amt.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="flex items-center border rounded-lg mb-4">
              <span className="px-2 text-gray-500">Rs</span>
              <input
                type="number"
                className="flex-1 p-2 outline-none"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
              />
              <select className="p-2 border-l bg-gray-50">
                <option>NPR</option>
                <option>USD</option>
              </select>
            </div>

            {/* Dedicate Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">
                Dedicate this donation
              </label>
            </div>
          </div>

          {/* Donate Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold mt-4">
            Donate {frequency === "monthly" ? "Monthly" : "Now"}
          </button>
        </div>

        {/* ===== RIGHT SIDE - IMAGE (Equal size) ===== */}
        <div className="fflex flex-col">
          <img
            src={img1}
            alt="Donate visual"
            className="w-full h-64 object-cover rounded-xl shadow mb-6"
          />

          {/* Subheading */}
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Support CVDS-Nepal and Empower Lives
          </h2>

          <p className="text-gray-600 text-sm text-justify leading-relaxed">
            Conflict Victim and Disabled Society-Nepal (CVDS-Nepal) is a
            nonprofit social organization established in 2005 with a mission to
            enhance opportunities and uplift the livelihood of conflict victims
            and children with disabilities (CWDs) in Nepal. With the realization
            that love, harmony, and peace are essential for enhancing the life
            of our target groups, CVDS aims to gradually eradicate societal
            prejudice and unfavorable opinions about them.
          </p>

          <p className="text-gray-600 text-sm text-justify mt-4 leading-relaxed">
            CVDS is planning to run a vocational school project to support
            thousands of persons with disabilities and other marginalized
            groups. The organization focuses on promoting the livelihood of
            1,000 persons with disabilities and marginalized people over the
            next 10 years, creating sustainable opportunities and a better
            future.
          </p>
        </div>



{/* ===== NEW SECTION: Donor List ===== */}
<div className="w-full col-span-full bg-white py-12 mt-12"> {/* CHANGED: No changes here, but ensuring col-span-full for grid */}
  {/* Inner Container */}
  <div className="max-w-6xl mx-auto p-8"> {/* CHANGED: Removed bg-white rounded-2xl border border-gray-200 shadow-lg to reduce boxed feel */}
    {/* === Header === */}
    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
      <h2 className="text-3xl font-extrabold text-[#1F2B6C] tracking-wide">
        Donor List
      </h2>

      {/* === Filters === */}
      <div className="flex flex-wrap items-center gap-3">
        <select className="border border-gray-300 rounded-lg p-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-[#1F2B6C]">
          <option>This Year: 2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>

        <select className="border border-gray-300 rounded-lg p-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-[#1F2B6C]">
          <option>Giving style: All</option>
          <option>Occasional</option>
          <option>Monthly</option>
        </select>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> {/* CHANGED: Replaced emoji with Search icon from lucide-react */}
          {/* CHANGED: Removed emoji from placeholder text */}
<input
  type="text"
  placeholder="Search by donor name"
  className="border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm w-52 md:w-64 focus:outline-none focus:border-[#1F2B6C]"
/>

        </div>
      </div>
    </div>

    {/* === Donor Table === */}
    <div className="overflow-x-auto border border-gray-100"> {/* CHANGED: Removed rounded-xl shadow-md to reduce boxed feel */}
      <table className="w-full text-sm text-left">
        <thead className="bg-[#1F2B6C] text-white">
          <tr>
            <th className="p-3 font-semibold">Donor Name</th>
            <th className="p-3 font-semibold">Member ID</th>
            <th className="p-3 font-semibold text-right">Total Donations</th>
            <th className="p-3 font-semibold text-right">Last Donation</th>
            <th className="p-3 font-semibold text-center">Donated On</th>
            <th className="p-3 font-semibold text-center">Giving Style</th>
          </tr>
        </thead>

        <tbody>
          {[
            {
              name: "Alexis Thomas",
              total: "Rs250.00",
              last: "Rs250.00",
              date: "Mar 01, 2025",
              style: "Occasional",
            },
            {
              name: "Mario Garcia",
              total: "Rs238.00",
              last: "Rs20.00",
              date: "Feb 27, 2025",
              style: "Occasional",
            },
            {
              name: "Sophia Lawson",
              total: "Rs510.00",
              last: "Rs500.00",
              date: "Feb 24, 2025",
              style: "Occasional",
            },
            {
              name: "Abdur Young",
              total: "Rs202.00",
              last: "Rs100.00",
              date: "Feb 23, 2025",
              style: "Occasional",
            },
            {
              name: "Maya Nolan",
              total: "Rs4,181.57",
              last: "Rs383.00",
              date: "Feb 23, 2025",
              style: "Occasional",
            },
          ].map((donor, i) => (
            <tr
              key={i}
              className={`border-t border-gray-100 ${
                i % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-[#E8ECF5]/50 transition-colors`}
            >
              <td className="p-3 font-medium text-gray-800">{donor.name}</td>
              <td className="p-3 text-[#1F2B6C] font-semibold">Assign ID</td>
              <td className="p-3 text-gray-700 text-right">{donor.total}</td>
              <td className="p-3 text-gray-700 text-right">{donor.last}</td>
              <td className="p-3 text-gray-700 text-center">{donor.date}</td>
              <td className="p-3 text-gray-700 text-center">{donor.style}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* === Total Donors Counter === */}
    <div className="mt-6 text-right">
      <span className="bg-[#E8ECF5] text-[#1F2B6C] px-4 py-1.5 rounded-full text-sm font-semibold"> {/* CHANGED: Removed shadow-sm to reduce boxed feel */}
        Total donors: 87
      </span>
    </div>
  </div>
</div>
{/* ===== End of Donor List Section ===== */}












      </div>

      


      
    </div>
  );
}



 
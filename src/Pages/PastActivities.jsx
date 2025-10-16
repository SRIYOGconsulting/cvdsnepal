import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/project.jpg";
import image2 from "../assets/project.jpg";
import image3 from "../assets/images8.jpg";
import image4 from "../assets/images9.jpg";
import image5 from "../assets/home3.jpg";
import image7 from "../assets/projecta.png";

import image9 from "../assets/vocational.jpg";


const pastActivities = [
  {
    year: "2015",
    title: "Medical Relief Camp",
    description:
      "Organized a nationwide medical relief campaign for individuals injured during the civil conflict, offering free check-ups, medicines, and mobility aids.",
    image: image1,
  },
  {
    year: "2017",
    title: "Women Empowerment Workshop",
    description:
      "Conducted skill-based training for women with disabilities to promote self-employment through handicrafts and tailoring.",
    image: image9,
  },
  {
    year: "2018",
    title: "Inclusive Education Program",
    description:
      "Partnered with local schools to enroll children with disabilities, ensuring they received equal educational opportunities.",
    image: image3,
  },
  {
    year: "2020",
    title: "COVID-19 Emergency Support",
    description:
      "Distributed food, medicines, and hygiene kits to families of disabled individuals severely affected by the lockdown.",
    image: image4,
  },
  {
    year: "2021",
    title: "Employment Partnership Drive",
    description:
      "Collaborated with local businesses to provide employment opportunities for skilled individuals with physical disabilities.",
    image: image5,
  },
  {
    year: "2023",
    title: "Community Awareness Campaign",
    description:
      "Launched a campaign to raise awareness about disability rights and social inclusion.",
    image: image7,
  },
  
 
];

const PastActivities = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const years = ["All", ...new Set(pastActivities.map((a) => a.year))];
  const filtered =
    selectedYear === "All"
      ? pastActivities
      : pastActivities.filter((a) => a.year === selectedYear);

  return (
    <div className="bg-white min-h-screen py-10">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-10">
        <h1 className="md:text-4xl font-bold text-gray-900">
          Our Past Activities
        </h1>

        {/* Year Filter */}
        <div className="flex items-center gap-2">
          <label className="text-gray-600 text-sm">
            Select Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-5xl mb-10 mx-auto flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pastactivities,index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={pastactivities.image}
                alt={pastactivities.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className=" font-semibold mb-2 text-[#1F2B6C]">
                  {pastactivities.year}
                </h3>
                <h4 className="text-xl font-semibold mb-2 text-[#1F2B6C]">
                  {pastactivities.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 text-justify">
                  {pastactivities.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastActivities;

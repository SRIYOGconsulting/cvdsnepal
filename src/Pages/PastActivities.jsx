import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/project.jpg";
import image2 from "../assets/project.jpg";

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
    image: image2,
  },
  {
    year: "2018",
    title: "Inclusive Education Program",
    description:
      "Partnered with local schools to enroll children with disabilities, ensuring they received equal educational opportunities.",
    image: image1,
  },
  {
    year: "2020",
    title: "COVID-19 Emergency Support",
    description:
      "Distributed food, medicines, and hygiene kits to families of disabled individuals severely affected by the lockdown.",
    image: image2,
  },
  {
    year: "2021",
    title: "Employment Partnership Drive",
    description:
      "Collaborated with local businesses to provide employment opportunities for skilled individuals with physical disabilities.",
    image: image1,
  },
  {
    year: "2023",
    title: "Community Awareness Campaign",
    description:
      "Launched a campaign to raise awareness about disability rights and social inclusion.",
    image: image2,
  },
  {
    year: "2024",
    title: "National Recognition",
    description:
      "Received national recognition for continuous dedication to the welfare of conflict-affected and disabled communities.",
    image: image1,
  },
];

const PastActivities = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

      {/* Carousel Section */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-10"
        >
          {filtered.map((activity, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 rounded-lg shadow-md border border-gray-200"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-44 object-cover rounded-lg"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  {activity.year}
                </p>
                <h3 className="text-lg font-semibold text-[#1F2B6C] mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default PastActivities;

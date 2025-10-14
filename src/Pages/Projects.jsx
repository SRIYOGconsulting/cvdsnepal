import React, { useState } from "react";
import { Calendar, Users, Search, X, MapPin } from "lucide-react";
import earlyLifeImage from "../assets/project.jpg";
import image2 from "../assets/project.jpg";

const projects = [
  {
    id: 1,
    title: "National Child Right Council",
    image: earlyLifeImage,
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    members: ["John Doe", "Jane Smith", "Sita Rai"],
    description:
      "Supporting entrepreneurship training for socially marginalized.",
    howItWorks: [
      "Conduct training workshops",
      "Provide mentorship and resources",
      "Monitor progress and provide support",
    ],
    country: "Nepal",
    approvalDate: "Jan 15, 2023",
    theme: "Child Rights",
  },
  {
    id: 2,
    title: "Local Government",
    image: image2,
    startDate: "Feb 2023",
    endDate: "Nov 2023",
    members: ["Ram Thapa", "Sita Lama"],
    description: "Collaborating with local development programs.",
    howItWorks: ["Policy advocacy", "Capacity building", "Community engagement"],
    country: "Nepal",
    approvalDate: "Feb 10, 2023",
    theme: "Governance",
  },
  {
    id: 3,
    title: "Individual Donors",
    image: earlyLifeImage,
    startDate: "Mar 2023",
    endDate: "Oct 2023",
    members: ["Anil Gurung", "Maya KC"],
    description:
      "Private donors supporting community entrepreneurship initiatives.",
    howItWorks: ["Funding projects", "Mentorship support", "Networking events"],
    country: "Nepal",
    approvalDate: "Mar 5, 2023",
    theme: "Entrepreneurship",
  },
  {
    id: 4,
    title: "Education for All",
    image: image2,
    startDate: "Jan 2024",
    endDate: "Ongoing",
    members: ["Rita Sharma", "Bishal Khadka"],
    description:
      "Ensuring access to quality education for marginalized children.",
    howItWorks: [
      "Building schools",
      "Training teachers",
      "Scholarship programs",
    ],
    country: "Nepal",
    approvalDate: "Jan 20, 2024",
    theme: "Education",
  },
  {
    id: 5,
    title: "Women Empowerment",
    image: earlyLifeImage,
    startDate: "Mar 2024",
    endDate: "Ongoing",
    members: ["Nirmala Gurung", "Puja BK"],
    description:
      "Providing vocational training and microfinance support to women.",
    howItWorks: [
      "Skill development training",
      "Financial literacy workshops",
      "Entrepreneurship mentoring",
    ],
    country: "Nepal",
    approvalDate: "Mar 12, 2024",
    theme: "Gender Equality",
  },
];

const Projects = () => {
  // --- STATES ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // --- FILTERED PROJECTS ---
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- RECENTLY APPROVED (just show first few by approvalDate) ---
  // const recentlyApproved = [...projects]
  //   .sort(
  //     (a, b) =>
  //       new Date(b.approvalDate + " 2024") - new Date(a.approvalDate + " 2024")
  //   )
  //   .slice(0, 5);

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-3">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Our Impactful Projects
      </h1>
      <p className="mb-8 text-gray-700 text-center">
        Note: CVDS-Nepal has prioritized socially marginalized, backward caste,
        women, and extremely poor conflict victim & PWD groups for its
        entrepreneurship training program.
      </p>

      {/* Search Section */}
      {/* <div className="mb-8 text-center">
        <h3 className="text-xl font-semibold mb-4 text-black">
          Search Projects
        </h3>
        <div className="relative inline-block w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#1F2B6C] bg-white text-black shadow-sm"
          />
        </div>
      </div> */}

      {/* Recently Approved Projects */}
      {/* <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#1F2B6C] mb-6">
          Recently Approved Projects
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-[#1F2B6C] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Project Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden sm:table-cell">
                  Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Approval Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentlyApproved.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-w-xs truncate">
                    {project.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                    {project.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {project.approvalDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      {/* All Projects */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-[#1F2B6C]">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;

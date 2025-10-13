

// import React from 'react';
// import earlyLifeImage from '../assets/message1.jpg';
// import image2 from '../assets/message2.jpg';


// const projects = [
//   {
//     image: earlyLifeImage,
//     title: 'National Child Right Council',
//     description: 'Supporting entrepreneurship training for socially marginalized, backward caste, women, and extremely poor conflict victim & PWD groups.',
//   },
//   {
//     image: image2,
//     title: 'Local Government',
//     description: 'Collaborating with local authorities to promote inclusive development programs.',
//   },
//   {
//     image: image2,
//     title: 'Individual Donors',
//     description: 'Private donors supporting community entrepreneurship initiatives.',
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="min-h-screen max-w-6xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold mb-6 text-black-800">PROJECTS</h1>
//       <p className="mb-8 text-gray-700">
//         Note: CVDS-Nepal has prioritized socially marginalized, backward caste, women, and extremely poor conflict victim & PWD groups for its entrepreneurship training program:
//       </p>

//       <div className="grid md:grid-cols-2 gap-10">
//         {projects.map((project, index) => (
//           <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full md:w-1/2 h-64 object-cover"
//             />
//             <div className="p-6 flex flex-col justify-center">
//               <h2 className="text-2xl font-semibold text-black-800 mb-2">{project.title}</h2>
//               <p className="text-gray-700">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;










import React, { useState } from "react";
import { Calendar, Users, Search, X, MapPin, Filter } from "lucide-react";
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
    description: "Supporting entrepreneurship training for socially marginalized.",
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
    howItWorks: [
      "Policy advocacy",
      "Capacity building",
      "Community engagement",
    ],
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
    description: "Private donors supporting community entrepreneurship initiatives.",
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
    description: "Ensuring access to quality education for marginalized children.",
    howItWorks: ["Building schools", "Training teachers", "Scholarship programs"],
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
    description: "Providing vocational training and microfinance support to women.",
    howItWorks: [
      "Skill development training",
      "Financial literacy workshops",
      "Entrepreneurship mentoring",
    ],
    country: "Nepal",
    approvalDate: "Mar 12, 2024",
    theme: "Gender Equality",
  },
  {
    id: 6,
    title: "Youth in Action",
    image: image2,
    startDate: "Apr 2023",
    endDate: "Dec 2023",
    members: ["Raju Lama", "Sarita Magar"],
    description: "Engaging youth in community service and leadership programs.",
    howItWorks: [
      "Leadership training",
      "Volunteer programs",
      "Community awareness campaigns",
    ],
    country: "Nepal",
    approvalDate: "Apr 8, 2023",
    theme: "Youth Development",
  },
  {
    id: 7,
    title: "Health for All",
    image: earlyLifeImage,
    startDate: "Feb 2023",
    endDate: "Ongoing",
    members: ["Dr. Sunita Shrestha", "Kiran KC"],
    description: "Providing health awareness and medical aid to rural communities.",
    howItWorks: [
      "Health camps",
      "Distribution of medicines",
      "Awareness sessions",
    ],
    country: "Nepal",
    approvalDate: "Feb 18, 2023",
    theme: "Health",
  },
  {
    id: 8,
    title: "Environment Care",
    image: image2,
    startDate: "Jan 2023",
    endDate: "Dec 2024",
    members: ["Prakash Thapa", "Meena Rai"],
    description: "Promoting eco-friendly practices and reforestation initiatives.",
    howItWorks: [
      "Tree plantation drives",
      "Environmental education",
      "Clean-up campaigns",
    ],
    country: "Nepal",
    approvalDate: "Jan 25, 2023",
    theme: "Environment",
  },
  {
    id: 9,
    title: "Support for Disabled",
    image: earlyLifeImage,
    startDate: "May 2023",
    endDate: "Ongoing",
    members: ["Anita Gurung", "Bibek Shahi"],
    description: "Helping people with disabilities through rehabilitation and education.",
    howItWorks: [
      "Skill-based training",
      "Accessible facilities",
      "Advocacy and awareness",
    ],
    country: "Nepal",
    approvalDate: "May 3, 2023",
    theme: "Inclusion",
  },
  {
    id: 10,
    title: "Child Nutrition Program",
    image: image2,
    startDate: "Jun 2023",
    endDate: "Ongoing",
    members: ["Sushma KC", "Deepak Rai"],
    description: "Improving nutrition levels among underprivileged children.",
    howItWorks: [
      "Nutritional awareness",
      "Food distribution programs",
      "Parental education",
    ],
    country: "Nepal",
    approvalDate: "Jun 14, 2023",
    theme: "Nutrition",
  },
];

// Recently approved (last 5, sorted by approval date descending)
const recentlyApproved = [...projects].sort(
  (a, b) => new Date(b.approvalDate) - new Date(a.approvalDate)
).slice(0, 5);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProcurement, setFilterProcurement] = useState(false);

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (!filterProcurement || project.theme.includes("Procurement")) 
  );

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 py-8">
      {/* Our Projects Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#1F2B6C]">Our Projects</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-2">
          CVDS Nepal provides support through innovative programs to marginalized communities.
        </p>
        <p className="max-w-2xl mx-auto text-gray-700">
          We focus on education, health, and sustainable development with collaborative financing.
        </p>
      </div>

      {/* Search Section */}
<div className="mb-8 text-center">
  <h3 className="text-xl font-semibold mb-4 text-black">Search Projects</h3>
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
</div>


      {/* Recently Approved Projects Table */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#1F2B6C] mb-6">Recently Approved Projects</h3>
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
      </div>

      {/* View All Projects */}
      <div>
        <h3 className="text-2xl font-bold text-[#1F2B6C] mb-6"> All Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, 10).map((project) => (
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
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.country}
                  </span>
                  <span>{project.theme}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full px-5 py-2 bg-[#1F2B6C] text-white rounded-md hover:bg-black transition"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

   {/* Modal */}
{selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-3 right-3 bg-[#1F2B6C] text-white rounded-full p-1.5 hover:bg-[#16245c] transition z-10 shadow-md"
      >
        <X className="w-5 h-5" />
      </button>

      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full h-48 object-cover rounded-t-xl mb-4"
      />
      <h2 className="text-2xl font-bold text-[#1F2B6C] mb-2 px-4">
        {selectedProject.title}
      </h2>

      <div className="px-4 mb-4">
        <div className="flex items-center gap-3 text-gray-700 text-sm mb-2">
          <Calendar className="w-4 h-4" />
          <span>
            {selectedProject.startDate} - {selectedProject.endDate}
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 text-sm">
          <Users className="w-4 h-4" />
          <span>{selectedProject.members.join(", ")}</span>
        </div>
      </div>

      <div className="px-4 mb-4">
        <p className="text-gray-700">{selectedProject.description}</p>
      </div>

      <div className="px-4 pb-4">
        <h3 className="font-semibold text-[#1F2B6C] mb-2">How It Works:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {selectedProject.howItWorks.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Projects;


import React from 'react';
import earlyLifeImage from '../assets/message1.jpg';
import image2 from '../assets/message2.jpg';


const projects = [
  {
    image: earlyLifeImage,
    title: 'National Child Right Council',
    description: 'Supporting entrepreneurship training for socially marginalized, backward caste, women, and extremely poor conflict victim & PWD groups.',
  },
  {
    image: image2,
    title: 'Local Government',
    description: 'Collaborating with local authorities to promote inclusive development programs.',
  },
  {
    image: image2,
    title: 'Individual Donors',
    description: 'Private donors supporting community entrepreneurship initiatives.',
  },
  {
    image: image2,
    title: 'Individual Donors',
    description: 'Private donors supporting community entrepreneurship initiatives.',
  },
  {
    image: image2,
    title: 'Individual Donors',
    description: 'Private donors supporting community entrepreneurship initiatives.',
  },
  {
    image: image2,
    title: 'Individual Donors',
    description: 'Private donors supporting community entrepreneurship initiatives.',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-3">
      <h1 className="text-4xl font-bold mb-6 text-black-800 text-center">Our Impactful Projects</h1>
      <p className="mb-8 text-gray-700 text-center">
        Note: CVDS-Nepal has prioritized socially marginalized, backward caste, women, and extremely poor conflict victim & PWD groups for its entrepreneurship training program:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow d overflow-hidden outline-gray-100 outline outline-solid">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-3 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-black-800 mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;






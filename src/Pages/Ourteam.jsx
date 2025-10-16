import React, {  useEffect } from "react";
import { Link } from 'react-router-dom';
import { appData } from '../constants';

const OurTeam = () => {
  const teamMembers = [
    { name: 'Full Name', role: 'Vice President', image: '../public/assets/images/female.png' },
    { name: 'Full Name', role: 'Secretary', image: '../public/assets/images/male.png' },
    { name: 'Full Name', role: 'Joint Secretary', image: '../public/assets/images/female.png' },
    { name: 'Full Name', role: 'Treasurer', image: '../public/assets/images/male.png' },
    { name: 'Full Name', role: 'Executive Member', image: '../public/assets/images/male.png' },
    { name: 'Full Name', role: 'Executive Member', image: '../public/assets/images/female.png' },
    { name: 'Full Name', role: 'Executive Member', image: '../public/assets/images/male.png' },
    { name: 'Full Name', role: 'Executive Member', image: '../public/assets/images/male.png' },
    // Add more members as needed
  ];
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="rounded-lg mb-10" style={{ border: '1px solid #d1d5dc', backgroundColor: 'oklch(0.95 0 0)' }}>
        <div className="flex flex-col sm:flex-row w-full h-full md:px-10 py-5 items-center">
          <div className=" h-[390px] flex flex-col items-center justify-center  md:p-0 basis-full w-full sm:basis-[30%] ">
            <div className=" w-[65%] md:h-56 md:w-full lg:h-64 lg:w-[75%] py-12">
              <img src='../public/assets/images/male.png' alt="President" className="w-48 h-48 rounded-full mb-3 object-cover" />
            </div>
            <div>
            </div>
            <h2 className="text-2xl text-center">Full Name</h2>
            <p className="text-2xl text-center ">President</p>
          </div>
          <div className="flex-1 flex flex-col justify-start basis-[70%] text-justify">
            <h1 style={{ fontSize: '30px' }}>About CDVS Nepal</h1><br />
            <p className=" text-gray-900 ">
              People with disability are the most vulnerable and marginalized group of people. They live in isolation, segregation, disparagement, poverty and virtual dependence on charity and even pity. They are the victim of the community misconception and stigmas denying them of their inalienable and recognized rights.
              <br />
              Conflict Victim and Disable Society ({appData.organizationName}) is located at {appData.municipality} Municipality-{appData.wardno}, {appData.address1}, {appData.address2}, {appData.city}. This organization has been supporting people with disability in Nepal since {appData.established}, providing food, clothes, shelter, and basic care through the Rehabilitation Center for Children with disability due to Cerebral Palsy (CP) project.
            </p>
            <br />
            <p>Follow CDVS Nepal on social media</p><br/>
            <div>
              <img src='../public/assets/images/twitter.png' alt="Twitter" className="w-6 h-6 mb-3 object-cover inline mr-2" style={{marginRight:'10px'}}/>
              <img src='../public/assets/images/linkedin.png' alt="Linkedin" className="w-6 h-6 mb-3 object-cover inline mr-2"/>
            </div>
          </div></div></div>

      {/* Team members grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-xl">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center min-h-[280px] " style={{ border: '1px solid #d1d5dc', backgroundColor: 'oklch(0.95 0 0)' }}>
            <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mb-3 object-cover" />
            <h2 style={{ fontSize: '18px' }}>{member.name}</h2>
            <p className='text-gray-700 ' style={{ fontSize: '14px' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
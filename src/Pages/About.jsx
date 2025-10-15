
import React from "react";
import { appData } from "../constants";
import aboutImg from "../assets/images.jpg"; 

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Who We Are</h1>
        <h2 className="text-2xl text-gray-700">
          Welcome to {appData.organizationName}
        </h2>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <div className="lg:w-1/2">
          <img
            src={aboutImg}
            alt="About Us"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-gray-700 space-y-4 text-justify">
          <p>
            People with disability are the most vulnerable and marginalized group of people. They live in isolation, segregation, disparagement, poverty and virtual dependence on charity and even pity. They are the victim of the community misconception and stigmas denying them of their inalienable and recognized rights.
          </p>
          <p>
            Conflict Victim and Disable Society ({appData.organizationName}) is located at {appData.municipality} Municipality-{appData.wardno}, {appData.address1}, {appData.address2}, {appData.city}. This organization has been supporting people with disability in Nepal since {appData.established}, providing food, clothes, shelter, and basic care through the Rehabilitation Center for Children with disability due to Cerebral Palsy (CP) project.
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="grid lg:grid-cols-2 gap-8 text-justify">
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p>
            Children with disability due to Cerebral Palsy, making them capable enough to lead an independent life thereby mainstreaming them towards national development.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <p>
            To remove societal bias and negative stereotypes in {appData.country} and provide equal opportunities. We motivate disabled and conflict victims through music, dance, art, formal education, and personality development programs conducted by medical practitioners, caregivers, therapists, teachers, and administrative personnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

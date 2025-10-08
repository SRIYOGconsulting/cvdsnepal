
import React from "react";
import { Target, Heart, Stethoscope, BookOpen, Palette, Users } from "lucide-react";

const Objectives = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 border-b border-gray-300 pb-3">
          Objectives
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-800 mb-10 leading-relaxed">
          With realizations that love, harmony and peace are necessary for
          enhancing the life of our target groups, CVDS aims at creating avenues
          so that the existing negative views and social prejudice towards them
          can slowly be eradicated. The organization is clear about its
          objectives, which can be cited as under:
        </p>

        {/* Broad Objective */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Target className="mr-3" size={24} />
            <h3 className="text-xl font-semibold">Broad Objective</h3>
          </div>
          <div className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
            <p className="text-sm md:text-base text-gray-700">
              To provide care and incessant support to disabled children through
              rehabilitation services.
            </p>
          </div>
        </div>

        {/* Specific Objectives */}
        <div>
          <div className="flex items-center mb-4">
            <Heart className="mr-3" size={24} />
            <h3 className="text-xl font-semibold">Specific Objectives</h3>
          </div>

          <div className="space-y-5">
            <div className="flex items-start border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
              <Stethoscope className="mt-1 mr-4" size={22} />
              <p className="text-sm md:text-base text-gray-700">
                To provide comprehensive medical service to children with
                disabilities — including medical, nutritional, and psychological
                treatment.
              </p>
            </div>

            <div className="flex items-start border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
              <BookOpen className="mt-1 mr-4" size={22} />
              <p className="text-sm md:text-base text-gray-700">
                To provide education and related materials specific to project
                beneficiaries.
              </p>
            </div>

            <div className="flex items-start border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
            <Palette className="mt-1 mr-4" size={22} />
              <p className="text-sm md:text-base text-gray-700">
                To offer creative skill development programs such as music and
                art.
              </p>
            </div>

            <div className="flex items-start border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
              <Users className="mt-1 mr-4" size={22} />
              <p className="text-sm md:text-base text-gray-700">
                To provide education and awareness to parents and stakeholders
                on autism and cerebral palsy (CP) among children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;

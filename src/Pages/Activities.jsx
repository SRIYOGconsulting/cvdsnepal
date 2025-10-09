
import React from "react";
import {
  Users,
  Heart,
  GraduationCap,
  Activity,
  Users2,
  Scale,
  Stethoscope,
  Building2,
} from "lucide-react"; 

const Activities = () => {
  const activities = [
    {
      title: "Rehabilitation Services",
      description:
        "Providing physical therapy and prosthetic support for conflict-injured individuals to regain mobility and independence.",
      icon: Users, 
      alt: "Rehabilitation icon",
    },
    {
      title: "Psychological Support",
      description:
        "Counseling and trauma therapy programs to help victims process PTSD and rebuild emotional resilience.",
      icon: Heart,
      alt: "Heart icon for psychological support",
    },
    {
      title: "Vocational Training",
      description:
        "Skill-building workshops (e.g., crafts, IT) tailored for disabled youth, leading to employment opportunities.",
      icon: GraduationCap,
      alt: "Graduation cap icon",
    },
    {
      title: "Education Access",
      description:
        "Inclusive schooling and literacy programs for disabled children from conflict zones, bridging educational gaps.",
      icon: Activity,
      alt: "Activity icon for education",
    },
    {
      title: "Community Integration",
      description:
        "Social events and awareness campaigns to reduce stigma and foster inclusive communities.",
      icon: Users2,
      alt: "Group users icon",
    },
    {
      title: "Advocacy & Rights",
      description:
        "Legal aid and policy advocacy to secure rights and government support for disabled conflict victims.",
      icon: Scale,
      alt: "Scale icon for justice",
    },
    {
      title: "Health & Nutrition",
      description:
        "Medical check-ups and nutrition drives to address secondary health issues from disabilities and displacement.",
      icon: Stethoscope,
      alt: "Stethoscope icon",
    },
    {
      title: "Pipeline (Future Plans)",
      description:
        "To date, we have been renting houses to provide a good home for children with disabilities. In the near future, we plan to possess our own facility and give children with disabilities better amenities. Due to mental illnesses like cerebral palsy, which their families have neglected, there are many homeless children in Nepal.",
      icon: Building2,
      alt: "Building icon for future plans",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section - Keep as image or swap to icon if you want */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At CVDS, we empower conflict victims with disabilities through
          targeted activities that promote healing, skills, and inclusion.
        </p>
      </section>

      {/* Activities Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 text-center"
              role="article"
            >
              <activity.icon
                size={64}
                className="mx-auto mb-4 text-blue-600" // Customize color/size
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;

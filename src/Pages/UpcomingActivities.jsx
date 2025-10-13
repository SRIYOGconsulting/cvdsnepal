import React from "react";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Heart, 
  Activity, 
  Scale 
} from "lucide-react";

const UpcomingActivities = () => {
  const upcomingEvents = [
    {
      title: "International Conference on Disability and Diversity (ICDD)",
      date: "October 16-17, 2025",
      location: "Kathmandu, Nepal",
      description: "Join us for discussions on inclusive practices for conflict-affected disabled individuals, featuring workshops on diversity in rehabilitation and community support.",
      icon: Users,
      alt: "Users icon for conference"
    },
    {
      title: "International Conference on Neurology & Neurological Disorders (ICONND)",
      date: "November 19, 2025",
      location: "Nepal (TBD)",
      description: "Explore advancements in neurological care tailored for children with disabilities from conflict zones, including sessions on cerebral palsy management and trauma recovery.",
      icon: Heart,
      alt: "Heart icon for neurology conference"
    },
    {
      title: "International Day of Persons with Disabilities Fair",
      date: "December 3, 2025",
      location: "Lalitpur Community Center, Nepal",
      description: "A family-friendly event with games, awareness stalls, and storytelling to celebrate inclusion and amplify voices of disabled youth affected by conflict.",
      icon: Calendar,
      alt: "Calendar icon for IDPD"
    },
    {
      title: "Assistive Robotics and Rehabilitation Workshop",
      date: "December 6, 2025",
      location: "Kathmandu, Nepal",
      description: "Hands-on training with adaptive tech for mobility aids, empowering conflict victims with disabilities through innovative tools and demos.",
      icon: Activity,
      alt: "Activity icon for workshop"
    },
    {
      title: "Policy Advocacy Roundtable on Disability Rights",
      date: "January 10, 2026",
      location: "Virtual/Hybrid, Nepal-wide",
      description: "Collaborate on policy reforms for better support of neglected disabled children, drawing from recent summits on climate and rights.",
      icon: Scale,
      alt: "Scale icon for advocacy"
    },
    {
      title: "Trauma Healing Art Therapy Camp",
      date: "February 20, 2026",
      location: "Pokhara, Nepal",
      description: "Creative sessions for PTSD recovery among disabled children, culminating in an exhibition to foster emotional resilience and community bonds.",
      icon: Heart,
      alt: "Heart icon for therapy camp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="flex flex-col items-center mb-6">
          <Calendar size={64} className="text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Activities</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover CVDS's exciting upcoming events in late 2025 and beyond, designed to empower conflict victims with disabilities through education, advocacy, and healing.
        </p>
      </section>

      {/* Events Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Join Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col justify-between" role="article">
              <event.icon 
                size={48} 
                className="mx-auto mb-4 text-blue-600" 
                aria-hidden="true" 
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar size={16} className="mr-2" />
                <time dateTime={event.date}>{event.date}</time>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{event.location}</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
             

<div className="mt-auto">

{/* ---- FIXED Register button alignment on Upcoming Activities page ---- */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Register Now</button>
           
           </div>
            </article>
          ))}
        </div>
      </section>

   
    </div>
  );
};

export default UpcomingActivities;







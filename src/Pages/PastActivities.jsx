
import React, { useState, useEffect } from "react";
import {
  HeartHandshake,
  GraduationCap,
  Hospital,
  Home,
  Award,
  Briefcase,
  Megaphone,
  Search,
  ArrowUp,
} from "lucide-react";
import image1 from "../assets/project.jpg";
import image2 from "../assets/project.jpg";

const PastActivities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const pastActivities = [
    {
      year: "2015",
      title: "Medical Relief Camp",
      description:
        "Organized a nationwide medical relief campaign for individuals injured during the civil conflict, offering free check-ups, medicines, and mobility aids.",
      icon: Hospital,
      image: image1,
    },
    {
      year: "2017",
      title: "Women Empowerment Workshop",
      description:
        "Conducted skill-based training for women with disabilities to promote self-employment through handicrafts and tailoring.",
      icon: HeartHandshake,
      image: image2,
    },
    {
      year: "2018",
      title: "Inclusive Education Program",
      description:
        "Partnered with local schools to enroll children with disabilities, ensuring they received equal educational opportunities.",
      icon: GraduationCap,
      image: image1,
    },
    {
      year: "2020",
      title: "COVID-19 Emergency Support",
      description:
        "Distributed food, medicines, and hygiene kits to families of disabled individuals severely affected by the lockdown.",
      icon: Home,
      image: image2,
    },
    {
      year: "2021",
      title: "Employment Partnership Drive",
      description:
        "Collaborated with local businesses to provide employment opportunities for skilled individuals with physical disabilities.",
      icon: Briefcase,
      image: image1,
    },
    {
      year: "2023",
      title: "Community Awareness Campaign",
      description:
        "Launched a campaign in collaboration with municipalities to raise awareness about disability rights and social inclusion.",
      icon: Megaphone,
      image: image2,
    },
    {
      year: "2024",
      title: "National Recognition",
      description:
        "Received national recognition for continuous dedication to the welfare of conflict-affected and disabled communities.",
      icon: Award,
      image: image1,
    },
  ];

  const filteredActivities = pastActivities.filter(
    (activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <div className="min-h-screen bg-white text-black px-4 py-16 relative">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Past Activities</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Over the years, CVDS has undertaken numerous initiatives aimed at
          rehabilitation, empowerment, and inclusion of conflict victims with disabilities.
        </p>
      </section>

      {/* Activities */}
      <section className="max-w-4xl mx-auto space-y-12">
        {filteredActivities.map((activity, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 bg-gray-100 rounded-xl p-6 shadow border-l-4 border-[#1F2B6C]"
          >
            <div className="md:w-32 flex-shrink-0">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-24 md:h-32 object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <activity.icon className="text-[#1F2B6C]" size={24} />
                <h3 className="text-xl font-semibold">{activity.title}</h3>
              </div>
              <p className="text-gray-700 mb-3">{activity.description}</p>
              <span className="inline-block bg-[#1F2B6C] text-white px-3 py-1 rounded-full text-sm font-medium">
                {activity.year}
              </span>
            </div>
          </article>
        ))}
      </section>

     {/* Search + Gallery Section */}
<section className="mt-20 pt-10 border-t border-gray-200 bg-white text-black">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center p-6">
    {/* Left: Text + Search */}
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2B6C]">
        We Have Successfully Worked on These Projects
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Over the years, our dedicated team has collaborated on numerous impactful 
        initiatives focused on empowerment, rehabilitation, and inclusion for 
        differently-abled and conflict-affected individuals.
      </p>

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search activities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F2B6C] placeholder-gray-400"
        />
      </div>
    </div>

    {/* Right: Gallery */}
    <div>
      <h3 className="text-xl font-semibold text-[#1F2B6C] mb-4">
        Glimpses of Our Work
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {[image1, image2, image1, image2, image1, image2].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i}`}
            className="w-full h-28 object-cover rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  </div>

 
</section>

    </div>
  );
};



export default PastActivities



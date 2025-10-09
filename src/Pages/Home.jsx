import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Heart,
  Users,
  Star,
  Lock,
  Newspaper,
  CalendarDays,
  HelpCircle,
  Megaphone,
  HeartHandshake,
} from "lucide-react";
import img1 from "../assets/female.png";
import img2 from "../assets/male.png";
import Header from "../Components/Header";
import newHeroImage from "../assets/homepage.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img1, img2];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden min-h-screen">
      <img
        src={newHeroImage}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-full object-cover "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start  px-6 md:px-16 lg:px-24 text-white">
        <h1 className="text-xl lg:text-4xl font-bold mb-4">
          Turning Challenges into <br /> Opportunities for All
          <br />
        </h1>
        <h3
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-[#f2eeec]"
          style={{ fontSize: "18px" }}
        >
          Adding the Wheel in Wheelchair, Restoring Dignity
        </h3>
        <br />
        <br />
        <Link to="/donate">
          <button className="bg-[#d9d9d9] px-3 py-1 text-black font-semibold hover:bg-blue-500 transition rounded-[0.5vw]">
            Donate Now
          </button>
        </Link>
      </div>
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 shadow"
      >
        <ChevronLeft size={28} className="text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 shadow"
      >
        <ChevronRight size={28} className="text-gray-800" />
      </button>
    </div>
  );
};

const ImpactSection = () => (
  <div className="bg-white text-black py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Your Support Makes a True Difference
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            stat: "40%",
            desc: "Children in our programs are up to 40% more likely to finish secondary education",
            icon: <Star />,
          },
          {
            stat: "4,000",
            desc: "Assisted children spend an average of 4,000 hours in nurturing programs",
            icon: <Heart />,
          },
          {
            stat: "75%",
            desc: "Children are 75% more likely to become leaders in their communities",
            icon: <Users />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 rounded hover:bg-gray-100 transition"
          >
            <div className="text-3xl font-bold mb-2">{item.stat}</div>
            <p className="text-sm mb-2 max-w-sm">{item.desc}</p>
            <div className="text-gray-700">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SponsorSection = () => (
  <div className="bg-white text-black py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Support a Child Today
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-8 max-w-3xl mx-auto">
        Help children living with disabilities and conflict victims build
        brighter futures.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { img: img1, name: "Aarati Lama" },
          { img: img2, name: "Bishal Thapa" },
          { img: img1, name: "Sita Magar" },
        ].map((child, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={child.img}
              alt={child.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{child.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Nepal</p>
              <Link
                to="/gallery"
                className="inline-block w-full text-center border border-black py-2 rounded hover:bg-black hover:text-white transition"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="space-x-4">
        <Link to="/gallery">
          <button className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
            View More
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const ConfidenceSection = () => (
  <div className="bg-white text-black py-16 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Give With Confidence
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          With CVDS-Nepal, your support is used wisely to help children and
          victims across Nepal.
        </p>
        {[
          {
            title: "Secure Donations",
            desc: "We use industry-standard encryption to protect your data.",
            icon: <Lock />,
          },
          {
            title: "Transparent Impact",
            desc: "Every donation is tracked with detailed reports.",
            icon: <BarChart3 />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start space-x-3 p-3 border border-gray-200 rounded mb-4"
          >
            <div className="p-2 border rounded-full">{item.icon}</div>
            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <img src={img2} alt="Confidence" className="rounded-lg shadow-md" />
    </div>
  </div>
);

const NewsSection = () => (
  <div className="bg-white text-black py-20 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12">
        Latest Updates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <Newspaper size={40} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-3">New Report Released</h3>
          <p className="text-sm text-gray-700 mb-6">
            Our 2025 Nationwide Access Report explores how exclusion impacts
            families and children across Nepal.
          </p>
          <Link
            to="/about"
            className="font-semibold text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Learn More
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <CalendarDays size={40} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Upcoming Event</h3>
          <p className="text-sm text-gray-700 mb-6">
            This October, join 400+ leaders in a national dialogue to promote
            inclusion for children and families.
          </p>
          <Link
            to="/activities"
            className="font-semibold text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            View Event
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-4">
            <HelpCircle size={40} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Need Support?</h3>
          <p className="text-sm text-gray-700 mb-6">
            Explore available resources and local assistance programs for
            children and families in need.
          </p>
          <Link
            to="/support"
            className="font-semibold text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Get Help
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const ActionSection = () => (
  <div className="bg-white text-black py-20 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12">
        Your Turn — Take Action
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
          <div className="p-3 border border-black rounded-full mb-6">
            <Users size={36} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Why Inclusion Matters</h3>
          <p className="text-sm text-gray-700 mb-6 max-w-xs">
            Learn how disability and conflict exclusion remain key causes of
            poverty — and what we can do together.
          </p>
          <Link
            to="/objectives"
            className="font-semibold text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            See Why
          </Link>
        </div>

        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
          <div className="p-3 border border-black rounded-full mb-6">
            <Megaphone size={36} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Join a Campaign</h3>
          <p className="text-sm text-gray-700 mb-6 max-w-xs">
            Advocate for the rights of children and families with disabilities
            by joining one of our active campaigns.
          </p>
          <Link
            to="/activities"
            className="font-semibold text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Join Now
          </Link>
        </div>

        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
          <div className="p-3 border border-black rounded-full mb-6">
            <HeartHandshake size={36} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Donate Today</h3>
          <p className="text-sm text-gray-700 mb-6 max-w-xs">
            Your contribution helps restore dignity and provide support to
            children and families in crisis.
          </p>
          <Link
            to="/donate"
            className="font-semibold text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <HeroSection />
      <ImpactSection />
      <SponsorSection />
      <ConfidenceSection />
      <NewsSection />
      <ActionSection />
    </div>
  );
};

export default Home;

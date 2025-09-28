import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { appData } from "../constants";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/slide3.jpg";
import img2 from "../assets/slide2.jpg";
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
          Turning Challenges into <br/> Opportunities for All<br/>
        </h1>
        <h3 className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-[#f2eeec]" style={{fontSize:"18px"}}>
          Adding the Wheel in Wheelchair, Restoring Dignity
        </h3>
        <br/><br/>
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

const AboutUsSection = () => (
  <div className="max-w-5xl mx-auto px-4 py-12">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h3>
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
      Conflict Victim and Disable Society-Nepal (CVDS-Nepal hereinafter) is a
      non profit social organization established in {appData.established} with a
      mission to enhance opportunities and uplift the livelihood of conflict
      victims and child with disabilities (cwd’s) in Nepal.
    </div>
  </div>
);

const ObjectivesSection = () => (
  <div className="max-w-5xl mx-auto px-4 py-12">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      <span className="text-blue-600">Our Objectives</span>
    </h3>
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
      With realizations that love, harmony and peace are necessary for
      enhancing the life of our target groups, the goal of CVDS is to open
      doors for the gradual eradication of societal prejudice and the current
      unfavorable opinions about them.
    </div>
  </div>
);

const PhotoGallerySection = () => (
  <div className="p-6 max-w-5xl mx-auto px-4 py-12">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Photo Gallery</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[img1, img2, img1, img2].map((photo, i) => (
        <img
          key={i}
          src={photo}
          alt={`Gallery ${i}`}
          className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition"
        />
      ))}
    </div>
  </div>
);

const PipelineSection = ({ showPipeline, handleReadMore }) => (
  <div className="p-6 max-w-5xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      {appData.organizationName} - Pipeline
    </h2>
    <h3 className="text-xl text-gray-700 mb-4">
      {appData.organizationName} is planning to run vocational School as a project.
    </h3>
    <p className="text-gray-600 mb-4">
      It will mainly support lifting thousands of the persons with disability
      and other marginalized groups. {appData.organizationName} is focusing
      on promoting the livelihood of 1000 persons with disability and
      marginalized people in 10 years.
    </p>
    <button
      onClick={handleReadMore}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {showPipeline ? "Show Less" : "Read More"}
    </button>
    {showPipeline && (
      <div className="mt-6 space-y-6 bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-800">Pipeline</h2>
        <p className="text-gray-600">
          To date, we have been renting houses to provide a good home for a
          child or children. However, in the near future, we plan to possess
          our own facility and give children with disabilities better
          amenities. Due to a mental illness called cerebral palsy, which
          their families have neglected, there are many homeless children in
          Nepal.
        </p>
        <h3 className="text-xl text-gray-700">About Us</h3>
        <p className="text-gray-600">
          Conflict Victim and Disable Society (CVDS-Nepal) is one of these
          non-profit organizations located at {appData.municipality} Municipality-{appData.wardno},{" "}
          {appData.address1}, {appData.address2}, {appData.city}. This organization has been
          supporting people with disabilities in Nepal since {appData.established}. The organization has been
          providing food, clothes, shelter, and care to children through the
          ‘Rehabilitation Center for Children with disability due to Cerebral Palsy (CP)’ project.
        </p>
        <h3 className="text-xl text-gray-700">Keep In Touch</h3>
        <p className="text-gray-600">
          {appData.address1}, {appData.address2}, {appData.city}
          <br />
          {appData.phone1}
          <br />
          {appData.email1}
        </p>
        <h3 className="text-xl text-gray-700">Events Gallery</h3>
        <p className="text-gray-600">
          Copyright © 2025 {appData.organizationName}. All Rights Reserved.
        </p>
        <p className="text-gray-600">BuildWith : BoardPress pipeline</p>
      </div>
    )}
  </div>
);

const Home = () => {
  const [showPipeline, setShowPipeline] = useState(false);
  const handleReadMore = () => setShowPipeline(!showPipeline);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <AboutUsSection />
      <ObjectivesSection />
      <PhotoGallerySection />
      <PipelineSection
        showPipeline={showPipeline}
        handleReadMore={handleReadMore}
      />
    </div>
  );
};

export default Home;


import React, { useState } from "react";

import { useOutletContext } from "react-router-dom";
import { appData } from "../constants";

const Home = () => {
  const { organizationName, pathname } = useOutletContext();
  const [showPipeline, setShowPipeline] = useState(false);
  const handleReadMore = () => {
    setShowPipeline(!showPipeline);
  };

  return (
    <div>
      <h1>Welcome To</h1>
      <h3>We make you smile & life impactful through our services.</h3>
      <p>
        {" "}
        We, CDVS family welcome to you all with love, harmony and peace,
        necessary for the enhancing the life of our target groups.It has been
        established in {appData.established} with a mission to enhance opportunities and
        uplift the livelihood of child with disabilities (cwd’s) in {appData.country}. CVDS
        aims at creating avenues so that the existing negative views and social
        prejudice towards them can slowly be eradicated. CVDS has been supporting
        people who have been affected by political, social, and cultural
        violence and provide a good shelter for a homeless child and kids with
        different facilities.
      </p>

      <h3>About Us</h3>
      <div>
        Conflict Victim and Disable Society-Nepal (CVDS-Nepal hereinafter) is a
        non profit social organization established in {appData.established} with a
        mission to enhance opportunities and uplift the livelihood of conflict
        victims and child with disabilities (cwd’s) in Nepal.
      </div>

      <div>
        <h3>
          <a>Our Objectives</a>
        </h3>
      </div>

      <div>
        With realizations that love, harmony and peace are necessary for the
        enhancing the life of our target groups, the goal of CVDS is to open
        doors for the gradual eradication of societal prejudice and the current
        unfavorable opinions about them.
      </div>

      <h3>Photo Gallery</h3>
      <div>Vist our photo gallery</div>

      <h2>{appData.organizationName}-pipeline</h2>
      <h3>
        {appData.organizationName} is planning to run vocational School as project.
      </h3>
      <p>
        It will be mainly support to lifting thousands of the persons with
        disability and others marginalize group. {appData.organizationName} is focusing
        and promoting the livelihood of 1000 persons with disability and
        marginalized people in 10 years.
      </p>

      <button onClick={handleReadMore}>
        {showPipeline ? "Show Less" : "Read More"}
      </button>
      {showPipeline && (
        <div>
          <h2>Pipeline</h2>
          <p>
            To date, we have been renting houses to provide a good home for a
            child or children. However, in the near future, we plan to possess
            our own facility and give a child with disabilities better
            amenities. Due to a mental illness called cerebral palsy, which
            their families have neglected, there are many homeless children in
            Nepal.
          </p>

          <h3>About Us</h3>
          <p>
            Conflict Victim and Disable Society (CVDS-Nepal) is one of these
            non- profit organizations located at {appData.municipality} Municipality-{appData.wardno},{" "}  
             {appData.address1},{" "} {appData.address2},{" "} {appData.city}. This organization has been devoting
            unceasingly with the aim of supporting the people with disability in
            Nepal since {appData.established}. The organization has been providing food, clothes,
            shelter, basic care and support mentally and physically disabled
            children through the ‘Rehabilitation Center for Children with
            disability due to Cerebral Palsy (CP)’ project.
          </p>

          <h3>Keep In Touch</h3>
          <p>
            {appData.address1}, {appData.address2}, {appData.city}
            <br />
            {appData.phone1}
            <br />
            {appData.email1}
          </p>

          <h3>Events Gallery</h3>

          <p>Copyright © 2025 {appData.organizationName}. All Rights Reserved.</p>
          <p>BuildWith : BoardPress pipeline</p>
        </div>
      )}
    </div>
  );
};

export default Home;

import React from "react";
import { appData } from "../constants";

const Activities = () => {
  return (
    <div>
      <h1>Activities</h1>
      <div className="pipeline-section">
        <h2>Pipeline</h2>
        <p>Home Present Pipeline</p>
        <p>Pipeline</p>
        <p>
          To date, we have been renting houses to provide a good home for a
          child or children. However, in the near future, we plan to possess our
          own facility and give a child with disabilities better amenities. Due
          to a mental illness called cerebral palsy, which their families have
          neglected, there are many homeless children in Nepal.
        </p>
      </div>
      <div className="about-us-section">
        <h2>About Us</h2>
        <p>
          Conflict Victim and Disable Society (CVDS-Nepal) is one of these
          non-profit organizations located at Shankarapur Municipality-6,
          Shalambutar, Sankhu, Kathmandu. This organization has been devoting
          unceasingly with the aim of supporting the people with disability in
          Nepal since 2005. The organization has been providing food, clothes,
          shelter, basic care and support mentally and physically disabled
          children through the ‘Rehabilitation Center for Children with
          disability due to Cerebral Palsy (CP)’ project.
        </p>
      </div>
      <div className="keep-in-touch-section">
        <h2>Keep In Touch</h2>
        <p>{appData.address1}, {appData.address2}, {appData.city}</p>
        <p>{appData.phone1}</p>
        <p>{appData.email1}</p>
      </div>
      <div className="events-gallery-section">
        <h2>Events Gallery</h2>
      </div>
      <div className="footer-section">
        <p>Copyright © 2025 CVDS Nepal. All Rights Reserved.</p>
        <p>Technology Partner : {appData.builtWith}</p>
      </div>
    </div>
  );
};

export default Activities;

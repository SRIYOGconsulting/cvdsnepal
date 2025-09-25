import React from "react";
import { appData } from "../constants";

const Supportus = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 py-12">
      <h1>Support Us</h1>
      <h2>Welcome to {appData.organizationName}</h2>
      <div>
        <p>
          Thank you for your interest in supporting our work. Here are some of
          the ways you can help.
        </p>
      </div>
      <div>
        <h2>Make a Donation</h2>
        <div>
          Please make a financial gift today to support our work throughout the
          world. Your contribution to CVDS-Nepal can make a real difference in
          the livelihoods of child with disabilities. Your support will be
          highly appreciated.

        </div>
        <div>
          <h2>Bank Detail:</h2>
          <br />
          Bank of {appData.city}, {appData.country}
          <br />
          A/C number : {appData.accountNumber}
          <br />
          A/C name : {appData.accountName}
        </div>
      </div>
    </div>
  );
};

export default Supportus;

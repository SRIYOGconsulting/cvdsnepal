import React from "react";

import { useOutletContext } from "react-router-dom";
const Contactus = () => {
  const { organizationName, pathname } = useOutletContext();
  return (
    <div>
      <h1>Contact Us</h1>
      <ol>
        <li>Home</li>
        <li>Get in Touch</li>
      </ol>
      <h2>
        Contact us if you need our services. We will be happy to make your
        events memorable!
      </h2>
      <div>Address</div>
      <div>
        [municipality] Municipality,
        ward-[wardno],,[address1],,[address2],[city]
      </div>
      <div>Phone</div>
      <div>[phone1]</div>
      <div>[phone2]</div>
      <div>Email</div>
      <div>[email1]</div>
      <div>[email2]</div>
      {/* location map */}
    </div>
  );
};

export default Contactus;

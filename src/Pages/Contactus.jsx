import React from 'react'
import { appData } from '../constants'
import { useOutletContext } from "react-router-dom";

const Contactus = () => {
  const { organizationName, pathname } = useOutletContext();
  return (
    <div>
      <h1>Contact Us</h1>
      <h3>
        Contact us if you need our services. We will be happy to make your
        events memorable!
      </h3>
      <div>Address</div>
      <div>
        {appData.municipality} Municipality-{appData.wardno},{" "}  
         {appData.address1},{" "} {appData.address2},{" "} {appData.city}
      </div>
      <div>Phone</div>
      <div>{appData.phone1}</div>
      <div>{appData.phone2}</div>
      <div>Email</div>
      <div>{appData.email1}</div>
      <div>{appData.email2}</div>
      {/* location map */}
    </div>
  );
};


export default Contactus;

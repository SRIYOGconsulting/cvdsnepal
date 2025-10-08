// import React from "react";
// import { appData } from "../constants";

// const Supportus = () => {
//   return (
//     <div className="min-h-screen max-w-5xl mx-auto px-4 py-12">
//       <h1>Support Us</h1>
//       <h2>Welcome to {appData.organizationName}</h2>
//       <div>
//         <p>
//           Thank you for your interest in supporting our work. Here are some of
//           the ways you can help.
//         </p>
//       </div>
//       <div>
//         <h2>Make a Donation</h2>
//         <div>
//           Please make a financial gift today to support our work throughout the
//           world. Your contribution to CVDS-Nepal can make a real difference in
//           the livelihoods of child with disabilities. Your support will be
//           highly appreciated.

//         </div>
//         <div>
//           <h2>Bank Detail:</h2>
//           <br />
//           Bank of {appData.city}, {appData.country}
//           <br />
//           A/C number : {appData.accountNumber}
//           <br />
//           A/C name : {appData.accountName}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Supportus;



import React from "react";
import { CreditCard, Users, Gift } from "lucide-react";

const SupportUs = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 py-12 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Support Us</h1>

      {/* Introduction */}
      <p className="mb-8">
        CVDS Nepal works to provide care, education, and rehabilitation for children with disabilities.
        Your support helps us continue our mission and create a positive impact in their lives.
      </p>

      {/* Ways to Support */}
      <h2 className="text-2xl font-semibold mb-4">Ways to Support</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <CreditCard className="mr-4" size={22} />
          <span>Donate: Your contributions help fund medical care, education, and rehabilitation programs.</span>
        </li>
        <li className="flex items-center">
          <Users className="mr-4" size={22} />
          <span>Volunteer: Join us in our activities to directly help children and families in need.</span>
        </li>
        <li className="flex items-center">
          <Gift className="mr-4" size={22} />
          <span>Partner with Us: Collaborate on programs, projects, or events that support our mission.</span>
        </li>
      </ul>

      {/* Call to Action */}
      <div className="mt-8">
       
      </div>
    </div>
  );
};

export default SupportUs;

// import React from "react";
// import { Phone, Mail } from "lucide-react";
// import bankLogo from "../assets/bank.jpg";
// import qrImage from "../assets/payment.png"; // placeholder QR

// const qrList = Array(12).fill(qrImage); // 12 QR thumbnails

// const Payment = () => {
//   return (
//     <section className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-12">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scan QR to Pay</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {qrList.map((qr, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center border border-black rounded-xl p-4 shadow-sm"
//           >
//             <img src={qr} alt={`QR ${index + 1}`} className="w-40 h-40 object-contain mb-2" />
//             <p className="text-center font-medium text-sm">CVDS Nepal Pvt. Ltd.</p>
//           </div>
//         ))}
//       </div>

//       {/* Optional: Contact info below the grid */}
//       <div className="mt-10 text-center text-black space-y-2">
//         <div className="flex justify-center gap-4">
//           <Phone className="w-4 h-4" />
//           <span>+977 9852024365</span>
//           <Mail className="w-4 h-4" />
//           <span>info@cvdsnepal.com</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Payment;



import React from "react";
import { Phone, Mail } from "lucide-react";

import qrImage from "../assets/payment.png";  // Placeholder QR image

// Array of QR codes (12 thumbnails)
const qrList = Array(12).fill(qrImage);

const Payment = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-12">
      
      {/* ===== Bank Logo and Heading ===== */}
      <div className="flex flex-col items-center mb-10">
        
        <h2 className="text-3xl font-semibold text-gray-900">Scan QR to Pay</h2>
      </div>

      {/* ===== QR Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {qrList.map((qr, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-black rounded-xl p-4 shadow-sm hover:scale-105 transition-transform duration-200"
          >
            <img src={qr} alt={`QR ${index + 1}`} className="w-40 h-40 object-contain mb-2" />
            <p className="text-center font-medium text-sm">CVDS Nepal Pvt. Ltd.</p>
          </div>
        ))}
      </div>

      {/* ===== Contact Info ===== */}
      <div className="mt-10 text-center text-black space-y-2">
        <div className="flex justify-center gap-4 items-center">
          <Phone className="w-5 h-5" />
          <span>+977 9852024365</span>
          <Mail className="w-5 h-5" />
          <span>info@cvdsnepal.com</span>
        </div>
        <a
          href="https://www.cvdsnepal.com"
          target="_blank"
          rel="noreferrer"
          className="text-black underline block pt-2 font-medium"
        >
          www.cvdsnepal.com
        </a>
      </div>
    </section>
  );
};

export default Payment;

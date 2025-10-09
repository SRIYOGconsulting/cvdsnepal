import React from "react";
import chairmanPortrait from "../assets/chairman.png";

const Messages = () => {
  const sections = [
    {
      title: "Message from the Executive Director",
      image: chairmanPortrait,
      text: `At the Conflict Victim Disabled Society (CVDS), our mission is rooted in compassion, equality, and justice. 
      We work to ensure that individuals affected by conflict and disability across Nepal are given the opportunity to live meaningful, independent, and dignified lives. 
      Through our programs in rehabilitation, education, livelihood, and advocacy, we strive to break barriers and create an inclusive environment where everyone can participate equally. 
      Our success stories are not just about recovery they are about empowerment, resilience, and hope.
      As we continue to expand our reach, I call upon government bodies, national and international partners, and compassionate individuals to join hands with us in creating a just and inclusive society for all.
      `,
      name: "Mr./Ms. X",
      position: "Executive Director",
      email: "executive@cvds.org.np",
    },
    {
      title: "Message from the Program Director",
      image: chairmanPortrait,
      text: `Dear Friends and Partners,
      CVDS has always believed that real change happens when people work together with purpose. 
      Our programs are designed to provide practical support from psychosocial counseling and vocational training to community reintegration and awareness campaigns.
      Each initiative reflects our belief that every individual has the right to participate, contribute, and thrive. 
      The dedication of our team and the trust of our partners have enabled us to reach thousands of beneficiaries who once felt left behind.
      Together, we continue to build opportunities for a more inclusive and compassionate Nepal.`,
      name: "Mr./Ms. Y",
      position: "Program Director",
      email: "programs@cvds.org.np",
    },
    {
      title: "Message from the Chairperson",
      image: chairmanPortrait,
      text: `The Conflict Victim Disabled Society was founded on the vision of an inclusive Nepal one where no individual is defined by their disability or by the conflicts of the past. 
      Our work is not just about service delivery; it is about restoring voices, rights, and dignity.
      We remain deeply grateful to our staff, partners, and communities who make this journey possible. 
      As we look to the future, CVDS remains committed to transparency, collaboration, and sustainable change.
      Let us continue to stand together for equality, justice, and inclusion.`,
      name: "Mr./Ms. Z",
      position: "Chairperson",
      email: "chairperson@cvds.org.np",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 max-w-5xl mx-auto">
      {/* Message Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={section.image}
              alt={section.title}
              className={`w-full md:w-1/3 h-64 object-cover ${
                index % 2 !== 0 ? "order-2 md:order-1" : ""
              }`}
            />
            <div
              className={`p-6 md:w-2/3 ${
                index % 2 !== 0 ? "order-1 md:order-2" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{section.title}</h3>
              <p className="text-gray-800 leading-relaxed text-justify mb-4 whitespace-pre-line">
                {section.text}
              </p>
              <div className="mt-4">
                <p className="font-semibold text-black">{section.name}</p>
                <p className="text-black">{section.position}</p>
                <p className="text-blue-600">{section.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;

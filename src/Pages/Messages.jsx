
import React from 'react';
import earlyLifeImage from '../assets/message1.jpg';
import image2 from '../assets/message2.jpg';
import chairmanPortrait from '../assets/chairman.png'; 
const Messages = () => {
  // Sections data
  const sections = [
    {
      title: 'Early Life in the Hills',
      image: earlyLifeImage,
      text: `I am Yub Raj Thapa born in 23rd march, 1973 in Hasanpur VDC, a remote
          place of Bhojpur district. I am the second child among 6
          children (4 sons and 2 daughters) of my parents. I was not only an
          active and curious sibling but also very good in study. My schooling
          was started from SHREE JAN SEVA LOWER SECONDARY school which was
          located nearby my house. I often stood first in study in the classes.
          After I passed class 7 I had to go four hours far from my house on
          feet to pursue my further education since we did not have high school
          in our village. When I was admitted to Shree Sagarmatha SECONDARY
          SCHOOL that time I was only fourteen year old. It was only me going
          that school from my area which used to lead me going alone finding
          school friends from only the middle of the path. I used feel often
          fear going through the jungle and hill where there were many dangerous
          animal like tigers and beers. Due to fear I used to carry a stick with
          me from my home thinking I could be safe and secured with it. I would
          not even get money to have my lunch and snacks going to the school.
          Struggling through hunger, tiredness and thrust coming back home from
          the school was my normal phenomena. Although, my family had enough
          resource providing a pocket money, I never got money to have my food
          caused starving time and again. However, I continued my study and
          passed grade 8..`
    },
    {
      title: 'The Onset of Illness',
      image: image2,
      text: `.`
    },
    {
      title: 'Journey to Kathmandu',
      image: earlyLifeImage,
      text: `.`
    },
    {
      title: 'Recovery and Education',
      image: image2,
      text: `.`
    },
    {
      title: 'Our Mission and Appeal',
      image: earlyLifeImage,
      text: `.`
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">
          Message from the Chairman
        </h1>
        <img
          src={chairmanPortrait}
          alt="Chairman Portrait"
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-blue-400"
        />
        <h2 className="text-2xl font-semibold text-black">Yub Raj Thapa</h2>
        <p className="text-black">President, Conflict Victim and Disable Society (CVDS)</p>
      </div>

      {/* Sections */}
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
                index % 2 !== 0 ? 'order-2 md:order-1' : ''
              }`}
            />
            <div
              className={`p-6 md:w-2/3 ${
                index % 2 !== 0 ? 'order-1 md:order-2' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-black mb-4">{section.title}</h3>
              <p className="text-black leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;

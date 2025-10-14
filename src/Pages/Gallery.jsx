import React from "react";
import img1 from "../assets/female.png";
import img2 from "../assets/male.png";
import img3 from "../assets/female.png";
import img4 from "../assets/female.png";
import img5 from "../assets/female.png";
import img6 from "../assets/male.png";

const Gallery = () => {
  const galleryProfiles = [
    {
      image: img1,
      name: "Aarati Lama",
      location: "Kathmandu, Nepal",
      description:
        "Aarati was born with a hearing impairment, but that hasn’t stopped her from expressing herself through art. With CVDs-Nepal’s support, she continues her education and dreams of becoming a painter.",
    },
    {
      image: img2,
      name: "Bishal Thapa",
      location: "Pokhara, Nepal",
      description:
        "Bishal lost partial mobility in his right leg during childhood, yet he remains active in school and enjoys playing football. CVDs-Nepal helps him access inclusive education and assistive materials.",
    },
    {
      image: img3,
      name: "Sita Magar",
      location: "Lalitpur, Nepal",
      description:
        "Sita is visually impaired but has an incredible sense of determination. She studies in an inclusive classroom and hopes to become a teacher to inspire other children like her. CVDs-Nepal provides her with learning support and Braille materials.",
    },
    {
      image: img4,
      name: "Kiran Rai",
      location: "Dharan, Nepal",
      description:
        "Kiran, who lives with a limb difference, loves science and technology. Through the guidance of CVDs-Nepal, he has gained confidence to pursue his dream of becoming an engineer.",
    },
    {
      image: img5,
      name: "Pooja KC",
      location: "Chitwan, Nepal",
      description:
        "Nabin uses a wheelchair for mobility, yet his passion for learning and storytelling motivates everyone around him. With the continuous support of CVDs-Nepal, he attends school regularly and is thriving.",
    },
    {
      image: img6,
      name: "Nabin Shrestha",
      location: "Bhaktapur, Nepal",
      description:
        "Nabin uses a wheelchair for mobility, yet his passion for learning and storytelling motivates everyone around him. With the continuous support of CVDs-Nepal, he attends school regularly and is thriving.Nabin is a creative child who enjoys drawing and storytelling.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Our Children Gallery</h1>
        <p className="text-gray-700">
          Meet the amazing children whose lives are being transformed through
          your support.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryProfiles.map((child, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={child.image}
              alt={child.name}
              className="w-54 h-54 flex justify-center items-center px-10 py-5 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{child.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{child.location}</p>
              <p className="text-sm text-gray-700">{child.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;

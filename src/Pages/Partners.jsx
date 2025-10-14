import { useState } from "react";
import { Search } from "lucide-react";

const partners = [
  { title: 'Silver Microsoft Partner', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'Salesforce', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'Webmerge', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'Kentico Bronze Partner', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'Amazon Web Services', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'IBM SI partner', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'DELL Boomi', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'Clouddera Connect', image: '../public/assets/images/silver-partnership.jpg' },
  { title: 'Salesforce', image: '../public/assets/images/silver-partnership.jpg' },
];

const Partners = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = partners.filter((partner) =>
    partner.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 mb-15 py-10">
      {/* Search Section */}
      <div className="mb-8 text-center">
        <h3 className="text-xl font-semibold mb-4 text-black">
          Search Partners
        </h3>
        <div className="relative inline-block w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search partners..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#1F2B6C] bg-white text-black shadow-sm"
          />
        </div>
      </div>

      {/* Filtered Partners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPartners.length > 0 ? (
          filteredPartners.map((partner, index) => (
            <div key={index}>
              <img
                src={partner.image}
                alt={partner.title}
                className="w-full h-60 object-cover outline outline-gray-200 rounded-lg"
              />
              <div className="py-3 text-center">
                <h2 className="text-[24px] text-black py-3">{partner.title}</h2>
                <button className="outline px-5 py-2 rounded-lg mx-auto block hover:bg-gray-100">
                  Browse more
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No partners found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Partners;

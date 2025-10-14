import React from 'react'

const partners = [
  {
    title: 'Silver Microsoft Partner',
    image:'../public/assets/images/silver-partnership.jpg'
  },
  {
    title: 'Salesforce',
    image:'../public/assets/images/silver-partnership.jpg'
  },
  {
    title: 'Webmerge',
    image:'../public/assets/images/silver-partnership.jpg'
  },
  {
    title: 'Kentico Bronze Partner',
    image:'../public/assets/images/silver-partnership.jpg'
  },
  {
    title: 'Amazon Web Services',
    image:'../public/assets/images/silver-partnership.jpg'
  },
  {
    title: 'IBM SI partner',
    image:'../public/assets/images/silver-partnership.jpg',
  },
  {
    title: 'DELL Boomi',
    image:'../public/assets/images/silver-partnership.jpg',
  },
  {
    title: 'Clouddera Connect',
    image:'../public/assets/images/silver-partnership.jpg'
  },
  {
    title: 'Salesforce  ',
    image:'../public/assets/images/silver-partnership.jpg'
  },
]

const Partners = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-15 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {partners.map((partner, index)=>(
          <div key={index}> 
            <img src={partner.image} alt={partner.title} className="w-full h-60 object-cover outline outline-gray-200 rounded-lg"/>
            <div className='py-3 text-center justify-center'>
              <h2 className="text-[24px] text-black py-3">{partner.title}</h2>
              <button className='outline px-5 py-2 rounded-lg mx-auto block'>Browse more</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners

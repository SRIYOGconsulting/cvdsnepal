import React from 'react'
import { Flag, Handshake, Users } from 'lucide-react';
const Partners = () => {
  return (
    <div className='min-h-screen bg-white'>

  <section className='bg-white text-black py-20'>
    <div className='max-w-5xl mx-auto px-4 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Our Partners</h1>
      <p className='text-xl opacity-90'>Collaborating for a brighter future for Nepal's children</p>
    </div>
  </section>


 
      <section className='py-16 bg-gray-50'>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-8 text-center'>Our Valued Partners</h2>
          <p className='text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto'>
            At CVDS Nepal, we join hands with global and local organizations to amplify our impact on child vulnerability. Together, we drive sustainable change.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* European Union */}
            <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow'>
              <div className='flex justify-center mb-4'>
                <div className='w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Flag className='w-12 h-12 text-blue-600' />
                </div>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>European Union</h3>
              <p className='text-gray-600'>Supporting community development and child rights initiatives.</p>
              <a href='/eu-partnership' className='text-blue-600 hover:underline mt-4 block'>Learn More</a>
            </div>

          
            <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow'>
              <div className='flex justify-center mb-4'>
                <div className='w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center p-2'>
                  <Handshake className='w-12 h-12 text-blue-600' />
                </div>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Joining Forces</h3>
              <p className='text-gray-600'>Collaborative efforts for humanitarian aid and resilience building.</p>
              <a href='/joining-forces' className='text-blue-600 hover:underline mt-4 block'>Learn More</a>
            </div>

          
            <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow'>
              <div className='flex justify-center mb-4'>
                <div className='w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center p-2'>
                  <Users className='w-12 h-12 text-blue-600' />
                </div>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>UNICEF</h3>
              <p className='text-gray-600'>Advancing child protection and education programs in Nepal.</p>
              <a href='/unicef-partnership' className='text-blue-600 hover:underline mt-4 block'>Learn More</a>
            </div>
          </div>
        </div>
      </section>


</div>



);
};

export default Partners;

import React, { useState } from 'react'

const Feedback = () => {
    const [formdata, setFormData] = useState({
        name:"",
        organization:"",
        position:"",
        email:"",
        rating:"",
        experience:"",
        recommend:"",
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formdata,
            [name]: value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formdata);
        alert("Form submitted successfully")
    }
  return (
    <div className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-8'>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <h2 className='text-3xl font-bold text-center'>CVDS Nepal Feedback Form</h2>
            {/* Name */}
            <div>
                <label className='font-medium block'>Full Name *</label>
                <input type='text' name='name' value={formdata.name} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'/>
            </div>
            {/* Organization */}
            <div>
                <label className='font-medium block'>Organization *</label>
                <input type='text' name='organization' value={formdata.organization} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'/>
            </div>
            {/* Position */}
            <div>
                <label className='font-medium block'>Position *</label>
                <input type='text' name='position' value={formdata.position} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'/>
            </div>
            {/* Email */}
            <div>
                <label className='font-medium block'>Email *</label>
                <input type='email' name='email' value={formdata.email} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'/>
            </div>
            {/* Rating */}
            <div>
                <label className='font-medium block'>Rate your experience *</label>
                <select name='rating' value={formdata.rating} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'>
                    <option value="">--Select--</option>
                    <option value="5">Excellent</option>
                    <option value="4">Very Good</option>
                    <option value="3">Good</option>
                    <option value="2">Fair</option>
                    <option value="1">Poor</option>
                </select>
            </div>
            {/* Experience */}
            <div>
                <label className='font-medium block'>Describe your experience with CVDS Nepal.</label>
                <textarea name='experience' value={formdata.experience} onChange={handleChange} rows="4" required placeholder='Write your feedback here...' className='w-full border border-gray-300 rounded-md p-2'></textarea>
            </div>
            {/* Recommend */}
            <div>
                <label className='font-medium block'>Would you recommend CVDS Nepal to others?</label>
                <div>
                    <label className='font-medium block'>
                        <input type='radio' name='recommend' value="Yes" checked={formdata.recommend === "Yes"} onChange={handleChange} required /> Yes
                    </label>
                    <label className='font-medium block'>
                        <input type='radio' name='recommend' value="No" checked={formdata.recommend === "No"} onChange={handleChange} required /> No
                    </label>
                </div>
            </div>
            {/* Submit button */}
            <button type='submit' className='border border-white text-white hover:bg-[#159EEC] bg-[#1F2B6C] px-4 py-2 rounded-lg'>Submit</button>
        </form>
      
    </div>
  )
}

export default Feedback

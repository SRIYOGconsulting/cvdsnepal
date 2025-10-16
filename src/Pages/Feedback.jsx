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
    <div>
        <form onSubmit={handleSubmit}>
            <h2>CVDS Nepal Feedback Form</h2>
            {/* Name */}
            <div>
                <label>Full Name *</label>
                <input type='text' name='name' value={formdata.name} onChange={handleChange} required />
            </div>
            {/* Organization */}
            <div>
                <label>Organization *</label>
                <input type='text' name='organization' value={formdata.organization} onChange={handleChange} required />
            </div>
            {/* Position */}
            <div>
                <label>Position *</label>
                <input type='text' name='position' value={formdata.position} onChange={handleChange} required />
            </div>
            {/* Email */}
            <div>
                <label>Email *</label>
                <input type='email' name='email' value={formdata.email} onChange={handleChange} required />
            </div>
            {/* Rating */}
            <div>
                <label>Rate your experience *</label>
                <select name='rating' value={formdata.rating} onChange={handleChange} required>
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
                <label>Describe your experience with CVDS Nepal.</label>
                <textarea name='experience' value={formdata.experience} onChange={handleChange} rows="4" required placeholder='Write your feedback here...'></textarea>
            </div>
        </form>
      
    </div>
  )
}

export default Feedback

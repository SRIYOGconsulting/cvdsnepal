import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <h3>About Us</h3>
          <p>
            Conflict Victim and Disable Society (CVDS-Nepal) is one of these non- profit organizations located at Shankarapur Municipality-6, Shalambutar,Sankhu,Kathmandu.This organization has been devoting unceasingly with the aim of supporting the people with disability in Nepal since 2005. The organization has been providing food, clothes, shelter, basic care and support mentally and physically disabled children through the ‘Rehabilitation Center for Children with disability due to Cerebral Palsy (CP)’ project.
          </p>
          <button><Link to="/about">READ MORE</Link></button>
        </div>
        <div>
          [address1], [address2], [city]
          [phone1]
          [email1]
        </div>
        <div>Events Gallery</div>
        Copyright © 2025 CVDS Nepal. All Rights Reserved.
        Technology Partner : PRACAS
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/supportus">Support Us</Link></li>
      </footer>

    </div>
  )
}

export default Footer

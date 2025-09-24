import React from 'react'
import { Link } from 'react-router-dom'
import { appData } from '../constants'

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <h3>About Us</h3>
          <p>
            Conflict Victim and Disable Society (CVDS-Nepal) is one of these non- profit organizations located at {appData.municipality} Municipality-6, {appData.address1},{appData.address2},{appData.city}.This organization has been devoting unceasingly with the aim of supporting the people with disability in Nepal since {appData.established}. The organization has been providing food, clothes, shelter, basic care and support mentally and physically disabled children through the ‘Rehabilitation Center for Children with disability due to Cerebral Palsy (CP)’ project.
          </p>
          <button><Link to="/about">READ MORE</Link></button>
        </div>
        <div>
          {appData.address1}, {appData.address2}, {appData.city}<br/>
          {appData.phone1}<br/>
          {appData.email1}
        </div>
        <div>Events Gallery</div>
        Copyright © 2025 {appData.organizationName}. All Rights Reserved.
        <br/>

        Technology Partner : <Link to ="/pracas">PRACAS</Link>
        <ul>
        <li><Link to="/activities">Activities</Link></li>
        </ul>
        
      </footer>

    </div>
  )
}

export default Footer

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
            Conflict Victim and Disable Society (CVDS-Nepal) is one of these non- profit organizations located at {appData.municipality} Municipality-6, {" "} {appData.address1}, {" "} {appData.address2},{" "} {appData.city}.This organization has been devoting unceasingly with the aim of supporting the people with disability in Nepal since {appData.established}. The organization has been providing food, clothes, shelter, basic care and support mentally and physically disabled children through the ‘Rehabilitation Center for Children with disability due to Cerebral Palsy (CP)’ project.
          </p>
          <button><Link to="/about">READ MORE</Link></button>
        </div>
        <br />
        <div>
          <h3>Keep In Touch</h3>
          <ul>
              <li>{appData.address1}, {appData.address2}, {appData.city}</li>
              <li>{appData.phone1}</li>
              <li>{appData.email1}</li>
            </ul>
        </div>
        <h3>Events Gallery</h3>
        <p>foto foto foto foto foto foto</p>
        Copyright © 2025 {appData.organizationName}. All Rights Reserved.
        <br/>

        BuildWith : <Link to ="/pracas">BoardPress</Link>
        <ul style={{listStyleType: "none", display: "flex", gap: "10px", padding: 0}}>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/donations">Donations</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/staffs">Staffs</Link></li>
        <li><Link to="/pastactivities">Past Activities</Link></li>
        <li><Link to="/upcomingactivities">Upcoming Activities</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        </ul>
        
      </footer>

    </div>
  )
}

export default Footer

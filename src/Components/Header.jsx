import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <p>
          [email1]
        </p>
      </div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
      <li><Link to="/ourteam">Our Team</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/donate">Donate(CTA)</Link></li>
    </div>
  )
}

export default Header

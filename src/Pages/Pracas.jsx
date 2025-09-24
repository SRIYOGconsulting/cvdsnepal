import React from 'react';
import { Link } from 'react-router-dom';

const Pracas = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>PRACAS - SRIYOG Consulting Pvt. Ltd.</h1>
      <p>
        PRACAS is a technology and consulting firm based in Kamalpokhari, Kathmandu, Nepal. We specialize in web development, digital marketing, and innovative technology solutions to help businesses grow and establish a strong online presence.
      </p>
      <h2>Our Services</h2>
      <ul>
        <li>Web Development: Building effective websites with our 21-stage process to ensure business growth.</li>
        <li>Corporate Email Solutions: Enhancing professional communication with custom domain emails.</li>
        <li>Digital Marketing: Leveraging tools like Google’s RANKBRAIN and YouTube algorithms to boost visibility.</li>
        <li>FinTech Solutions: Empowering families and businesses with digital finance tools, as seen in our Digital Dashain initiatives.</li>
        <li>Business Consulting: Offering tools like the Business Model Canvas and Pitch Deck creation for startups.</li>
      </ul>
      <h2>Our Team</h2>
      <p>
        Our team includes talented professionals like:
        <ul>
          <li>Lalita Ghimire (React JS Developer)</li>
          <li>PRACAS Upreti (Blogger)</li>
          <li>Niranjan Sharma (Project Manager)</li>
          <li>Dipak Pahari (UI/UX Designer)</li>
        </ul>
      </p>
      <h2>Contact Us</h2>
      <p>
        Location: Kamalpokhari, Kathmandu, Nepal<br />
        Phone: +977-9852025735<br />
        Email: <a href="mailto:p@sriyog.com">p@sriyog.com</a><br />
        Website: <a href="https://sriyog.com" target="_blank" rel="noopener noreferrer">sriyog.com</a>
      </p>
      <h2>Explore More</h2>
      <p>Check out our <a href="https://sriyog.com" target="_blank" rel="noopener noreferrer">blog</a> for insights on web development, digital footprints, and more!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Pracas;
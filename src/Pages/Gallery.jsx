import React from "react";

import img1 from "../assets/footer-1.jpg";
import img2 from "../assets/footer-2.jpg";
import img3 from "../assets/footer-3.jpg";
import img4 from "../assets/footer-4.jpg";
import img5 from "../assets/footer-5.jpg";
import img6 from "../assets/footer-6.jpg";

const Gallery = () => {
  const galleryImages = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <section className="gallery-header">
        <h1>Gallery</h1>
        <p>
          Home <span>Gallery</span>
        </p>
      </section>

      <section className="gallery-main-title">
        <h2>Gallery</h2>
      </section>

      <section className="gallery-images">
        {galleryImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>

      <footer className="gallery-footer">
        <div className="footer-container">
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              Conflict Victim and Disable Society (CVDS-Nepal) is one of these
              non-profit organizations located at Shankarapaur Municipality-6,
              Shalambutar, Sankhu, Kathmandu. This organization has been
              devoting unceasingly with the aim of supporting the people with
              disability in Nepal since 2005.
            </p>
            <p>
              The organization has been providing food, clothes, shelter, basic
              care and support mentally and physically disabled children through
              the Rehabilitation Center for Children with disability due to
              Cerebral Palsy .
            </p>
            <button>Read More</button>
          </div>

          <div className="keep-in-touch">
            <h3>Keep In Touch</h3>
            <ul>
              <li>Shalambutar, Sakhu, Kathmandu</li>
              <li>+977-9851160868</li>
              <li>info@cvdsnepal.org.np</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2025 CVDS Nepal. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;

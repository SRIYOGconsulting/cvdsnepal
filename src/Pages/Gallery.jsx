import React from "react";
import { appData } from "../constants";

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
      </section>

      <section className="gallery-images">
        {galleryImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>
      <a>{appData.youtube}</a><br/>
      <small>Powered by <a>{appData.poweredBy}</a></small>
    </div>
  );
};

export default Gallery;

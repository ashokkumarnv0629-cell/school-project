import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "src/assets/GalleryImg/1.jpg",
    "src/assets/GalleryImg/2 (1).jpg",
    "src/assets/GalleryImg/4.jpg",
    "src/assets/GalleryImg/5.jpg",
    "src/assets/GalleryImg/8.jpg",
    "src/assets/GalleryImg/8.jpg",
    "/src/assets/GalleryImg/17.jpg",
    "src/assets/GalleryImg/18.jpg",
    "src/assets/GalleryImg/18.jpg",
  ];

  return (
    <div className="gallery-page">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-card">
            <img src={src} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
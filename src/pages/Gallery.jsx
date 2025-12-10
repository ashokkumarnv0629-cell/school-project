import React from "react";
import "./Gallery.css";
import { useTranslation } from "react-i18next"; // <-- 1. Import Hook

const Gallery = () => {
  const { t } = useTranslation(); // <-- 2. Initialize Hook
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
      {/* Translate the main heading */}
      <h2>{t('gallery_title')}Our Gallery</h2>

      {/* Optionally add a description paragraph */}
      <p>{t('gallery_desc')}</p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-card">
            {/* Translate the alt text, providing context about the image */}
            <img src={src} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
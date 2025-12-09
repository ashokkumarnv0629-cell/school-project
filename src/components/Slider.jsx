import { useState, useEffect } from "react";
import "../App.css";

import img1 from "../assets/empty-classroom-in-a-elementary-school.webp";
import img2 from "../assets/school-building-uk-infant-junior-5-11years.webp";
import img3 from "../assets/school-bus-in-front-of-a-school.webp";

const images = [img1, img2, img3];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt={`school banner ${index + 1}`} />
    </div>
  );
};

export default Slider;

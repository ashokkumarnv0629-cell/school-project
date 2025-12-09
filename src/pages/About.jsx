import React from "react";
import "./About2.css";
import buildingImg from "../assets/GalleryImg/4.jpg";

const About2 = () => {
  return (
    <div className="about2-page">
      
      {/* ---------- ABOUT SCHOOL SECTION ---------- */}
      <section className="about2-section">
        <h2 className="about2-title">About Our School</h2>
        <div className="about2-divider"></div>

        <p className="about2-intro">
          Chaitanya Gurukula School, Santebennur, is committed to nurturing young minds
          with a perfect blend of traditional values and modern education. Our institution
          stands as a symbol of academic excellence, discipline, and holistic development.
        </p>
      </section>

      {/* ---------- MAIN ABOUT CONTENT ---------- */}
      <section className="about2-content">
        <img
          src={buildingImg}
          alt="School Building"
          className="about2-image"
        />

        <div className="about2-text">
          <p>
            G.I.S (GURUKULA INTERNATIONAL SCHOOL) was established in 1980. It is one of
            the premier institutions in Karnataka, serving the cause of education from
            Nursery to Tenth Standard in both English and Kannada medium at 9th Cross,
            Magadi Road, Bangalore city. The school has consistently achieved 100% SSLC
            Board Examination results due to the commitment of its teaching staff.
          </p>

          <p>
            The founders and successive leaders were distinguished educationists and
            philanthropists who laid a strong foundation and nurtured its growth over
            decades. Their dedication, determination, and values have shaped GIS into a
            respected institution with more than 2000 students.
          </p>

          <p>
            For more than four decades, GIS remains devoted to its mission of providing
            quality education, instilling discipline, and fostering holistic development
            among students.
          </p>
        </div>
      </section>

      {/* ---------- GIS VALUES SECTION ---------- */}
      <section className="about2-values">
        <h2 className="about2-title">GIS Values</h2>
        <div className="about2-divider"></div>

        <div className="values-container">
          <img
            src={buildingImg}
            alt="GIS Values"
            className="about2-image"
          />

          <ul className="values-list">
            <li><strong>Discipline:</strong> Encouraging responsible behavior and self-control.</li>
            <li><strong>Integrity:</strong> Building honesty, sincerity, and strong moral character.</li>
            <li><strong>Respect:</strong> Treating everyone with dignity and kindness.</li>
            <li><strong>Excellence:</strong> Highest standards in academics & life.</li>
            <li><strong>Holistic Growth:</strong> Mental, emotional & physical development.</li>
            <li><strong>Traditional Values:</strong> Culture + modern learning.</li>
          </ul>
        </div>
      </section>

      {/* ---------- MERGED MANAGEMENT + PRINCIPAL DESK SECTION ---------- */}
      <section className="about2-management-merged">
        <h2 className="about2-title">Management & Principal’s Message</h2>
        <div className="about2-divider"></div>

        <div className="merged-container">
          <img
            src={buildingImg}
            alt="Management"
            className="about2-image"
          />

          <div className="merged-text">
            <h3 className="management-subtitle">Chairman & Managing Director</h3>
            <p className="management-name">Mr. Nanjundaiah. S</p>

            <p className="merged-paragraph">
              Completed MA. B.Ed., from Mysore University in 1979. Joined Bapuji Independence 
              P.U. College, Magadi Road, Bangalore in 1980 as a Lecturer and later served 
              as Principal until 2006.
            </p>

            <h3 className="management-subtitle">From the Principal’s Desk</h3>

            <p className="merged-paragraph">
              Education of the new millennium needs to be technologically innovative and 
              creatively challenging. Students must be prepared for the challenges of 
              tomorrow while appreciating and respecting our rich cultural heritage.
            </p>

            <p className="merged-paragraph">
              Our mission is to impart quality education and create responsible, capable 
              individuals who contribute positively to the nation.
            </p>

            <p className="merged-paragraph">
              We welcome you into our institution and congratulate you for choosing the 
              right environment that nurtures learning and growth — Karnataka Education 
              Society of Gurukula International School.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About2;

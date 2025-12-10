import React from "react";
import "./About2.css";
import buildingImg from "../assets/GalleryImg/4.jpg";
import { useTranslation } from "react-i18next"; // <-- Import Hook

const About2 = () => {
  const { t } = useTranslation(); // <-- Initialize Hook
  return (
    <div className="about2-page">
      
      {/* ---------- ABOUT SCHOOL SECTION ---------- */}
      <section className="about2-section">
        <h2 className="about2-title">About Our School</h2>
        <div className="about2-divider"></div>

        <p className="about2-intro">
          {t('about_intro_p1')}
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
            {t('about_history_p1')}
            G.I.S (GURUKULA INTERNATIONAL SCHOOL) was established in 1980. It is one of
            the premier institutions in Karnataka, serving the cause of education from
            Nursery to Tenth Standard in both English and Kannada medium at 9th Cross,
            Magadi Road, Bangalore city. The school has consistently achieved 100% SSLC
            Board Examination results due to the commitment of its teaching staff.
          </p>

          <p>
            {t('about_history_p2')}
            The founders and successive leaders were distinguished educationists and
            philanthropists who laid a strong foundation and nurtured its growth over
            decades. Their dedication, determination, and values have shaped GIS into a
            respected institution with more than 2000 students.
          </p>

          <p>
            {t('about_history_p3')}
            For more than four decades, GIS remains devoted to its mission of providing
            quality education, instilling discipline, and fostering holistic development
            among students.
          </p>
        </div>
      </section>

      {/* ---------- GIS VALUES SECTION ---------- */}
      <section className="about2-values">
        <h2 className="about2-title">{t('about_values_title')}GIS Values</h2>
        <div className="about2-divider"></div>

        <div className="values-container">
          <img
            src={buildingImg}
            alt="GIS Values"
            className="about2-image"
          />

          <ul className="values-list">
            <li><strong>{t('value_discipline_title')}Discipline:</strong> {t('value_discipline_desc')}Encouraging responsible behavior and self-control.</li>
            <li><strong>{t('value_integrity_title')}Integrity:</strong>{t('value_integrity_desc')} Building honesty, sincerity, and strong moral character.</li>
            <li><strong>{t('value_respect_title')}Respect:</strong> {t('value_respect_desc')}Treating everyone with dignity and kindness.</li>
            <li><strong>{t('value_excellence_title')}Excellence:</strong> {t('value_excellence_desc')}Highest standards in academics & life.</li>
            <li><strong>{t('value_holistic_title')}Holistic Growth:</strong> {t('value_holistic_desc')}Mental, emotional & physical development.</li>
            <li><strong>{t('value_traditional_title')}Traditional Values:</strong>{t('value_traditional_desc')} Culture + modern learning.</li>
          </ul>
        </div>
      </section>

      {/* ---------- MERGED MANAGEMENT + PRINCIPAL DESK SECTION ---------- */}
      <section className="about2-management-merged">
        <h2 className="about2-title">{t('about_management_title')}Management & Principal’s Message</h2>
        <div className="about2-divider"></div>

        <div className="merged-container">
          <img
            src={buildingImg}
            alt="Management"
            className="about2-image"
          />

          <div className="merged-text">
            <h3 className="management-subtitle">{t('management_chairman_role')}Chairman & Managing Director</h3>
            <p className="management-name">{t('management_chairman_name')}Mr. Nanjundaiah. S</p>

            <p className="merged-paragraph">
              {t('management_chairman_bio')}
              Completed MA. B.Ed., from Mysore University in 1979. Joined Bapuji Independence 
              P.U. College, Magadi Road, Bangalore in 1980 as a Lecturer and later served 
              as Principal until 2006.
            </p>

            <h3 className="management-subtitle">{t('management_principal_role')}From the Principal’s Desk</h3>

            <p className="merged-paragraph">
              {t('management_principal_p1')}
              Education of the new millennium needs to be technologically innovative and 
              creatively challenging. Students must be prepared for the challenges of 
              tomorrow while appreciating and respecting our rich cultural heritage.
            </p>

            <p className="merged-paragraph">
              {t('management_principal_p2')}
              Our mission is to impart quality education and create responsible, capable 
              individuals who contribute positively to the nation.
            </p>

            <p className="merged-paragraph">
              {t('management_principal_p3')}
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

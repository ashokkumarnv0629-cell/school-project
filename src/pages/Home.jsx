import Slider from "../components/Slider";
import homeImg from "../assets/home2.jpg";
import "./Home.css";
import { useTranslation } from "react-i18next"; // <-- Import Hook

const Home = () => {
  const { t } = useTranslation(); // <-- Initialize Hook

  return (
    <div>
      <Slider />

      {/* The empty h1 with inline styles is removed for cleaner code */}
      
      <div className="home-container">
        
        {/* HERO SECTION - Updated with translation keys */}
        <header className="hero-section">
          <h1>
            {t('hero_welcome_prefix')}{" "}
            <span className="highlight">
              {t('school_name')}, {t('address')}
            </span>
          </h1>

          <h3 className="tagline">
            {t('hero_tagline_prefix')}{" "}
            <span className="highlight2">
              {t('hero_tagline_suffix')}
            </span>
          </h3>

          <p className="description">
            {t('hero_description')} 
          </p>
        </header>

        {/* CONTENT SECTION - Courses and Image */}
        <section className="content-section">
          <div className="text-block">
            <h2>{t('courses_heading')}:</h2>
            <ul>
              {/* All list items must use t() */}
              <li>{t('course_nursery')}</li>
              <li>{t('course_grade1_3')}</li>
              <li>{t('course_grade4_10_cbse')}</li>
              <li>{t('course_grade8_10_state_english')}</li>
              <li>{t('course_grade_kannada_medium')}</li>
            </ul>
          </div>

          <div className="image-block">
            {/* Alt text is also translated */}
            <img src={homeImg} alt={t('principal_image_alt')} /> 
          </div>
        </section>

        {/* MAP SECTION */}
        <h1 className="Map">{t('map_directions')}</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.518671500661!2d76.0825028!3d12.8988647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba32439a37e583f%3A0x6b8764b8e2171114!2sSanthebennur%2C%20Karnataka%20577552!5e0!3m2!1sen!2sin!4v1703248882583!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
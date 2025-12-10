import "../App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation(); 
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false); // Close mobile menu after selection
  };
  
  const isLangActive = (lng) => i18n.language === lng;

  return (
    <nav className="navbar">
      
      {/* 1. LOGO AND LANGUAGE SWITCHER (Grouped for alignment) */}
      <div className="logo-group">
        <div className="logo">{t('Chaitanya Gurukula School')}</div> {/* <-- Translated */}
        
        {/* Language Switcher (Visible on desktop/tablet) */}
        <div className="language-switcher desktop-visible">
          <button 
            onClick={() => changeLanguage('en')} 
            className={`lang-btn ${isLangActive('en') ? 'active' : ''}`}
          >
            EN
          </button>
          <span className="lang-separator">|</span>
          <button 
            onClick={() => changeLanguage('kn')} 
            className={`lang-btn ${isLangActive('kn') ? 'active' : ''}`}
          >
            KN
          </button>
        </div>
      </div>

      {/* 2. MENU ICON (Only visible on mobile) */}
      {/* I've removed the language switcher from here to fix visibility */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* 3. NAVIGATION LINKS (Using translation keys) */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/">{t('nav_home')}</NavLink></li>
        <li><NavLink to="/about">{t('nav_about')}</NavLink></li>
        
        {/* Dropdown Menu */}
        <li className="dropdown">
          <NavLink to="/education">{t('nav_education')} ⬇</NavLink>
          <div className="dropdown-menu">
            <NavLink to="/prekg">{t('edu_prekg')}</NavLink>
            <NavLink to="/primary">{t('edu_primary')}</NavLink>
            <NavLink to="/highschool">{t('edu_highschool')}</NavLink>
          </div>
        </li>
        
        <li><NavLink to="/gallery">{t('nav_gallery')}</NavLink></li>
        <li><NavLink to="/contact">{t('nav_contact')}</NavLink></li>
        
        {/* Language Switcher (Mobile Only - Optional, if you want it inside the expanding menu) */}
        <li className="mobile-switcher-item">
            <div className="language-switcher mobile-visible">
                <button onClick={() => changeLanguage('en')} className={`lang-btn ${isLangActive('en') ? 'active' : ''}`}>EN</button>
                <span className="lang-separator">|</span>
                <button onClick={() => changeLanguage('kn')} className={`lang-btn ${isLangActive('kn') ? 'active' : ''}`}>KN</button>
            </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
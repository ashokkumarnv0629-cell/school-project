import "../App.css";
import React from 'react';
import { useTranslation } from 'react-i18next'; // <-- 1. Import Hook

const Footer = () => {
  const { t } = useTranslation(); // <-- 2. Initialize Hook
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          {/* Use translation keys for school name and rights reserved */}
          &copy; {currentYear} {t('school_name')} — {t('footer_rights_reserved')}
        </p>
        <p>
          {/* Use translation keys for address label and the address itself */}
          {t('footer_address_label')}: {t('address')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
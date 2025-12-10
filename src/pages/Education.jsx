import React from "react";
import "./Education.css";
import { useTranslation } from "react-i18next"; // <-- Import Hook

const Education = () => {
  const { t } = useTranslation(); // <-- Initialize Hook
  return (
    <div className="education-page">
      {/* Page Title */}
      <h2>{t('edu_programs_title')}Education Programs</h2>
      {/* Program Descriptions/Methodology (Optional) */}
      <p>{t('edu_method_desc')}</p> 

      {/* Program List */}
      <ul>
        {/* Using translation keys for each program level */}
        <li>{t('edu_prekg')}Pre-KG</li>
        <li>{t('edu_primary')}Primary School</li>
        <li>{t('edu_highschool')}High School</li>
      </ul>
      {/* You can add more detailed descriptions here using other keys */}
      <h3>{t('edu_grade_level_title')}</h3>
      <p>{t('edu_grade_level_desc')}</p>
    </div>
  );
};

export default Education;

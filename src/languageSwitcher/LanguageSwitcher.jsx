import { useTranslation } from "react-i18next";
import "./styles/LanguageSwitcher.scss";
import { useRef, useState, useEffect } from "react";
import { languages } from "../common/form/FormData";
import dropdown from '../assets/icons/TranslationDropdown.svg'
import blueCheck from '../assets/icons/BlueCheckSign.svg'
const LanguageSwitcher = () => {
  const [isOpen, setisOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [chosenLanguage, setchosenLanguage] = useState('English(United States)');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleDiv = () => {
    setisOpen(!isOpen);
  };
  const handleSelect = (index,languauge,code)=>{
    setSelectedIndex(index);
    setchosenLanguage(languauge);
    changeLanguage(code);
    toggleDiv();
  }

  return (
    <div className="language-button-container">
      {/* Button to open/close div */}
      <div onClick={toggleDiv} className="language-toggle-button">
        {chosenLanguage}
        <img src={dropdown} alt="" className="language-blue-tick"/>
      </div>

      {/* Main Div that appears when button is clicked */}
      {isOpen && (
        <div className="language-popup">
          {languages.map((item, index) => (
            <div key={index} className={`${item.language===chosenLanguage?'language-inner-div-blue':'language-inner-div'}`} onClick={()=>handleSelect(index,item.language,item.code)}>
              <p>{item.language}</p>
              {item.language===chosenLanguage && <img src={blueCheck} alt="" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

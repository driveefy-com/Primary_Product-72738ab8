import { useTranslation } from "react-i18next";
import "./styles/LanguageSwitcher.scss";
import { useState } from "react";
import { languages } from "../../common/form/FormData";
import dropdown from '../../assets/icons/TranslationDropdown.svg'
import blueCheck from '../../assets/icons/BlueCheckSign.svg'
const LanguageSwitcher = () => {
  const [isOpen, setisOpen] = useState(false);
  const { i18n } = useTranslation();
  const {t}=useTranslation();
  const [chosenLanguage, setchosenLanguage] = useState('English (United States)');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    
  };

  const toggleDiv = () => {
    setisOpen(!isOpen);
  };
  const handleSelect = (index,languauge,code)=>{
    setchosenLanguage(languauge);
    changeLanguage(code);
    toggleDiv();
  }

  return (
    <div className="language-button-container">
      <div onClick={toggleDiv} className="language-toggle-button">
        {t(chosenLanguage)
        }
        <img src={dropdown} alt="" className="language-dropdown"/>
      </div>

      {isOpen && (
        <div className="language-popup">
          {languages.map((item, index) => (
            <div key={index} className={`${item.language===chosenLanguage?'language-inner-div-blue':'language-inner-div'}`} onClick={()=>handleSelect(index,item.language,item.code)}>
              <p>{t(item.language)}</p>
              {item.language===chosenLanguage && <img src={blueCheck} alt="" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

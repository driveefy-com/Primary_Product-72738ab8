import { useTranslation } from "react-i18next";
import "./styles/LanguageSwitcher.scss";
import { useRef, useState,useEffect } from "react";

const LanguageSwitcher = () => {
  const [isOpen, setisOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisOpen(false);
      }
    };

    // Add event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-container"  ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
      🌍
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("es")}
          >
            ES
          </button>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("fr")}
          >
            FR
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

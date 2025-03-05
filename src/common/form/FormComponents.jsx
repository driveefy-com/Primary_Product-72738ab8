import "./styles/FormComponent.scss";
import { useState } from "react";
import check from "../../assets/icons/CheckSign.svg";
import arrowDown from "../../assets/icons/ArrowDown.svg";
import arrowUp from "../../assets/icons/ArrowUp.svg";
import blueCheck from "../../assets/icons/BlueCheckSign.svg";
import EyeOpen from "../../assets/icons/EyeOpen.svg";
import EyeClose from "../../assets/icons/EyeClose.svg";
import { useTranslation } from "react-i18next";
import ClickAwayListener from "react-click-away-listener";

export const FormComponents = ({ formData, onChange, value }) => {
  const { t } = useTranslation();
  const [Focused, setFocused] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [tagValue, settagValue] = useState("");
  const options = formData?.options || [];
  const [filteredOptions, setfilteredOptions] = useState(options);
  const [isEyeOpen, setisEyeOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formType, setformType] = useState(formData?.type || "text");

  const handleChange = (e) => {
    setisOpen(true);
    settagValue(e.target.value);
    const filteredData = options.filter((item) =>
      item.toLowerCase().includes(e.target.value.toString().toLowerCase())
    );
    setfilteredOptions(filteredData);
  };
  
  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };
  
  const handleClick = (item, index) => {
    settagValue(item);
    setSelectedIndex(index);
  };
  
  const handleEyeToggle = () => {
    setisEyeOpen(!isEyeOpen);
    setformType(isEyeOpen ? "password" : "text");
  };

  switch (formData?.inputType) {
    case "movePlaceholderUp": {
      return (
        <div className="input-container">
          <input
            name={formData.name}
            type={formType}
            required
            value={value || ""}
            className={`input-field ${Focused ? "focused" : ""}`}
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(e.target.value !== "")}
            onChange={onChange}
          />
          <div className="placeholder">{t(formData.placeholder)}</div>
          <img
            className="password-eye"
            src={isEyeOpen ? EyeOpen : EyeClose}
            onClick={handleEyeToggle}
            alt="toggle visibility"
          />
        </div>
      );
    }
    case "text": {
      return (
        <div className="input-container">
          <input
            className="input-field"
            name={formData?.name}
            type={formType}
            required
            placeholder={t(formData?.placeholder) || ""}
            onChange={onChange}
          />
          {formData?.type === "password" && (
            <img
              className="password-eye"
              src={isEyeOpen ? EyeOpen : EyeClose}
              onClick={handleEyeToggle}
              alt="toggle visibility"
            />
          )}
        </div>
      );
    }
    case "dropdown":
      return (
        <ClickAwayListener onClickAway={() => setisOpen(false)}>
          <div className="input-organization" onClick={toggleDropdown}>
            <div className="input-dropdown">
              <input
                type="text"
                onChange={handleChange}
                value={tagValue}
                name={formData?.name}
                autoComplete="off"
                placeholder={t(formData?.placeholder) || ""}
              />
              {isOpen && (
                <div className="dropdown-select">
                  {filteredOptions.map((item, index) => (
                    <div
                      className="dropdown-option"
                      key={index}
                      onClick={() => handleClick(item, index)}
                    >
                      <img src={selectedIndex === index ? blueCheck : check} alt="" />
                      <p style={selectedIndex === index ? { color: "#4285f4" } : {}}>{item}</p>
                    </div>
                  ))}
                </div>
              )}
              <img src={isOpen ? arrowUp : arrowDown} alt="toggle dropdown" />
            </div>
          </div>
        </ClickAwayListener>
      );
    case "smallerText":
      return (
        <div className="input-organization">
          <input
            className="input-smaller-field"
            name={formData?.name}
            type={formData?.type || "text"}
            required
            placeholder={t(formData?.placeholder) || ""}
            onChange={onChange}
          />
        </div>
      );
    default:
      return <input name={formData?.name} type={formData?.type || "text"} />;
  }
};

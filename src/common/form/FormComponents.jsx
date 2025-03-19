import "./styles/FormComponent.scss";
import { useEffect, useRef, useState } from "react";
import check from "../../assets/icons/CheckSign.svg";
import arrowDown from "../../assets/icons/ArrowDown.svg";
import arrowUp from "../../assets/icons/ArrowUp.svg";
import blueCheck from "../../assets/icons/BlueCheckSign.svg";
import EyeOpen from "../../assets/icons/EyeOpen.svg";
import EyeClose from "../../assets/icons/EyeClose.svg";
import { useTranslation } from "react-i18next";
import ClickAwayListener from "react-click-away-listener";

export const FormComponents = ({ formData, onChange,isEditable }) => {
  const { t } = useTranslation();
  const [Focused, setFocused] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [tagValue, settagValue] = useState("");
  const options = formData?.options || [];
  const [filteredOptions, setfilteredOptions] = useState(options);
  const [isEyeOpen, setisEyeOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formType, setformType] = useState(formData?.type || "text");
  const [inputValue, setInputValue] = useState("");
  const inputRef=useRef(null);

  // useEffect(() => {
  //   if (inputRef.current) {
  //     onChange(inputRef.current)
  //     console.log("Input name:", inputRef.current.name); // Ensure it's available
  //   }
  //   // onChange(inputRef.current)
  // }, [tagValue])
  const changeHandle=()=>{
    console.log('fff');
    
  }
  const handleChange = (e) => {
    setisOpen(true);
    settagValue(e.target.value);
    const filteredData = options.filter((item) =>
      item.toLowerCase().includes(e.target.value.toString().toLowerCase())
    );
    setfilteredOptions(filteredData);
    console.log('gg');
    
  };
  
  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };
  
  const handleClick = (item, index) => {
    settagValue(item);
    setSelectedIndex(index);
    if (inputRef.current) {
      const event = { target: { name: formData?.name, value: item } };
      onChange(event);  // ✅ Call onChange manually
    }
  
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
            className={`input-field ${Focused ? "focused" : ""}`}
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(e.target.value !== "")}
            onChange={onChange}
          />
          <div className="placeholder">{t(formData.placeholder)}</div>
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
                // onChange={changeHandle}
                onInput={handleChange}
                value={tagValue}
                autoComplete="off"
                placeholder={t(formData?.placeholder) || ""}
                disabled={isEditable}
                ref={inputRef}
                name={formData?.name}
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
             {isEditable?'':<img src={isOpen ? arrowUp : arrowDown} alt="toggle dropdown" />}
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
            disabled={isEditable}
          />
        </div>
      );
    default:
      return <input name={formData?.name} type={formData?.type || "text"} />;
  }
};

import "./styles/FormComponent.scss";
import { useState } from "react";
import check from "../../assets/icons/CheckSign.svg";
import arrowDown from "../../assets/icons/ArrowDown.svg";
import arrowUp from "../../assets/icons/ArrowUp.svg";
import blueCheck from '../../assets/icons/BlueCheckSign.svg';
import EyeOpen from '../../assets/icons/EyeOpen.svg';
import EyeClose from '../../assets/icons/EyeClose.svg'
import { useTranslation } from "react-i18next";
export const FormComponents = ({ formData, onChange, value }) => {
  const {t}=useTranslation();
  const [Focused, setFocused] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [tagValue, settagValue] = useState("");
  const options = formData.options;
  const [filteredOptions, setfilteredOptions] = useState(options);
  const [isEyeOpen, setisEyeOpen] = useState(false);
  
 const [selectedIndex, setSelectedIndex] = useState(null);
 const [formType, setformType] = useState(formData.type)
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
  const handleClick=(item,index)=>{
    settagValue(item);
    setSelectedIndex(index);
  }
  const handleEyeOpen=()=>{
setisEyeOpen(!isEyeOpen)
setformType('password');
  }
  const handleEyeClose=()=>{
    setisEyeOpen(!isEyeOpen)
    setformType('text');
  }
  switch (formData.inputType) {
    case "movePlaceholderUp":
     {if(formData.type=='password'){
      
      return (<div className="input-container">
      <input
        name={formData.name}
        type={formType}
        required
        value={value}
        className={`input-field ${Focused ? "focused" : ""}`}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== "")}
        onChange={onChange}
      />
      
      <div className="placeholder">{t(formData.placeholder)}</div>
      {isEyeOpen ? <img className="password-eye" src={EyeOpen} onClick={handleEyeOpen}/> : <img src={EyeClose} className="password-eye" onClick={handleEyeClose}/>}
    </div>)
     }
     else
     {
      return (
        <div className="input-container">
          <input
            name={formData.name}
            type={formData.type}
            required
            value={value}
            className={`input-field ${Focused ? "focused" : ""}`}
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(e.target.value !== "")}
            onChange={onChange}
          />
          <div className="placeholder">{t(formData.placeholder)}</div>
        </div>
      )}}
    case "text":
      {if(formData.type == 'password'){
        return (<div className="input-container">
            <input
              className="input-field"
              name={formData.name}
              type={formType}
              required
              placeholder={t(formData.placeholder)}
              onChange={onChange}
            />
             {isEyeOpen ? <img className="password-eye" src={EyeOpen} onClick={handleEyeOpen}/> : <img src={EyeClose} className="password-eye" onClick={handleEyeClose}/>}
          </div>)
      }
      else{
        return (
          <div className="input-container">
            <input
              className="input-field"
              name={formData.name}
              type={formData.type}
              required
              placeholder={t(formData.placeholder)}
              onChange={onChange}
            />
          </div>
        );
      }
    }
    case "dropdown":
      return (
        <div className="input-organization" onClick={toggleDropdown}>
          <div
            className="input-dropdown"
          
          >
          
            <input
              type="text"
              onChange={handleChange}
              value={tagValue}
              name={formData.name}
              autoComplete="off"
              placeholder={t(formData.placeholder)}
            />
            {isOpen && (
              <div className="dropdown-select">
                {filteredOptions.map((item, index) => {
                  return (
                    <div
                      className="dropdown-option"
                      key={index}
                      onClick={() => handleClick(item,index)}
                    >
                    {selectedIndex === index?<img src={blueCheck} alt=""/>:<img src={check} alt=""/>}
                      {selectedIndex === index?<p style={{color:'#4285f4'}}>{item}</p>:<p>{item}</p>}

                    </div>
                  );
                })}
              </div>
            )}
            {isOpen ? (
              <img src={arrowUp} alt="" />
            ) : (
              <img src={arrowDown} alt="" />
            )}
          </div>
        </div>
      );
    case "smallerText":
      return (
        <div className="input-organization">
          <input
            className="input-smaller-field"
            name={formData.name}
            type={formData.type}
            required
            placeholder={t(formData.placeholder)}
            onChange={onChange}
          />
        </div>
      );
    default:
      return <input />;
  }
};

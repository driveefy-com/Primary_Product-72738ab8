import "./styles/FormComponent.scss";
import { useRef, useState } from "react";
import check from "../../assets/icons/CheckSign.svg";
import arrowDown from "../../assets/icons/ArrowDown.svg";
import arrowUp from "../../assets/icons/ArrowUp.svg";
import blueCheck from '../../assets/icons/BlueCheckSign.svg'
export const FormComponents = ({ formData, onChange, value }) => {
  const [Focused, setFocused] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [tagValue, settagValue] = useState("");
  const [Text, setText] = useState("");
  const [options, setoptions] = useState(formData.options);
  const [filteredOptions, setfilteredOptions] = useState(options);
  const inputRef = useRef(null);
  const [isSelected, setisSelected] = useState(false);
  // console.log(Text);
  console.log(tagValue);
 const [selectedIndex, setSelectedIndex] = useState(null);
  const setValue = (item) => {
    console.log(inputRef.current.element);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setisOpen(true);
    settagValue(e.target.value);
    const filteredData = options.filter((item) =>
      item.toLowerCase().includes(e.target.value.toString().toLowerCase())
    );
    //  console.log(filteredData);
    setfilteredOptions(filteredData);
    console.log(filteredOptions);
  };
  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };
  const handleClick=(item,index)=>{
    settagValue(item);
    setSelectedIndex(index);
  }
  const handleSelect = (index,item) => {
    setSelectedIndex(index);
    setimg(item)
  };
  switch (formData.inputType) {
    case "movePlaceholderUp":
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
          <div className="placeholder">{formData.placeholder}</div>
        </div>
      );
    case "text":
      return (
        <div className="input-container">
          <input
            className="input-field"
            name={formData.name}
            type={formData.type}
            required
            placeholder={formData.placeholder}
            onChange={onChange}
          />
        </div>
      );
    case "dropdown":
      return (
        <div className="input-organization" onClick={toggleDropdown}>
          <div
            className="input-dropdown"
            // value={tagValue}
            // ref={inputRef}
          >
            {/* {console.log(formData.options) */}
            {/* } */}
            <input
              type="text"
              onChange={handleChange}
              value={tagValue}
              name={formData.name}
              autoComplete="off"
              placeholder={formData.placeholder}
            />
            {/* <span className="placeholder">{tagValue}</span> */}
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
            placeholder={formData.placeholder}
            onChange={onChange}
          />
        </div>
      );
    default:
      return <input />;
  }
};

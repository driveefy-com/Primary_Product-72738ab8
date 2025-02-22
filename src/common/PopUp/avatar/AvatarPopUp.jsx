import React, { useState } from "react";
import SubmitButton from "../../buttons/SubmitButton";
import greenCheck from "../../../assets/icons/greenCheckIcon.svg";
import "./styles/AvatarPopUp.scss";
import cross from "../../../assets/icons/AvatarPageCrossIcon.svg";
import { useDispatch } from "react-redux";
function AvatarPopUp({ isOpen, onClose, avatarList }) {
  // console.log(avatarList);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [img, setimg] = useState();
  const dispatch = useDispatch();
  const handleClick = (item) => {
    // console.log(item);
    // setSelectedIndex(index === selectedIndex ? null : index);
    dispatch({ type: "SET_PROFILE_PICTURE", payload: item });
    onClose();
  };

  if (!isOpen) return null;
  const handleSelect = (index, item) => {
    setSelectedIndex(index);
    setimg(item);
  };
  return (
    <div className="avatar-main-container">
      <img src={cross} alt="" onClick={onClose} className="avatar-cross-icon"/>
      <h1>Select your Avatar</h1>
      <div className="avatar-container">
        {avatarList.map((item, index) => {
          return (
            <div className="img-container">
              <img
                src={item}
                alt=""
                key={index}
                // onSelect={handleClick(item)}
                // onClick={()=>handleClick(item,index)}
                onClick={() => handleSelect(index, item)}
              />
              {selectedIndex === index && (
                <img src={greenCheck} alt="" className="checkbox" />
              )}
            </div>
          );
        })}
      </div>
      <div className="avatar-button-container">
        <button onClick={() => handleClick(img)}>Select</button>
      </div>
    </div>
  );
}

export default AvatarPopUp;

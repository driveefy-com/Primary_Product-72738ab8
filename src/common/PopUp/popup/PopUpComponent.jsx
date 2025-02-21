import React from "react";
import "./styles/PopUp.scss";
// import dp from "../../../assets/icons/ProfilePictureIcon.svg";
import { useSearchParams } from "react-router-dom";
import AvatarPopUp from "../avatar/AvatarPopUp";
import { useSelector } from "react-redux";
const PopUpComponent = ({ isOpen, onClose,avatarList }) => {
    const {img}=useSelector(state=>state.popup)
  const [searchParams, setSearchParams] = useSearchParams();
  if (!isOpen) return null;
  const isAvatarOpen=searchParams.get("avatar") === 'true';
  const openAvatar = () => {
    setSearchParams({popup:"true",avatar:"true"});
  };
  const closeAvatar = () => {
    setSearchParams({ popup:"true",avatar: "false" });
  };

  return (
    <div className="organization-pop-up">
      <p onClick={onClose}>🗙</p>
      <div className="dp-container">
        <img src={img} alt="" />
      </div>
      <hr />
      <div className="popup-options-container">
        <button>Upload from this Device&nbsp;&gt;</button>
        <hr />
        <button onClick={openAvatar}>
          Select from the avatar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &gt;
        </button>
        <hr />
        <div className="button-container">
          <button>Save</button>
          <button onClick={closeAvatar}>Cancel</button>
        </div>
      </div>
      <div className="avatar-container">
      {isAvatarOpen && <AvatarPopUp isOpen={isAvatarOpen} onClose={closeAvatar} avatarList={avatarList}/>}
      </div>
    </div>
  );
};

export default PopUpComponent;

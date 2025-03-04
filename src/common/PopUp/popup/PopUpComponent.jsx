import {  useRef } from "react";
import "./styles/PopUp.scss";
import arrow from "../../../assets/icons/PopUpGreaterThanArrow.svg";
import dp from "../../../assets/icons/ProfilePictureIcon.svg";
import cross from "../../../assets/icons/popUpCross.svg";
import { useSearchParams } from "react-router-dom";
import AvatarPopUp from "../avatar/AvatarPopUp";
import { useDispatch, useSelector } from "react-redux";
import { popUpAction } from "../../../redux/actions/popUpAction";
const PopUpComponent = ({ isOpen, onClose, avatarList }) => {
  const { img } = useSelector((state) => state.popup);
  const [searchParams, setSearchParams] = useSearchParams();
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const setPicture = (item) => {
    dispatch(popUpAction(item));
    setSearchParams({ popup: "false" });
  };
  if (!isOpen) return null;
  const isAvatarOpen = searchParams.get("avatar") === "true";
  const openAvatar = () => {
    setSearchParams({ popup: "true", avatar: "true" });
  };
  const closeAvatar = () => {
    setSearchParams({ popup: "true", avatar: "false" });
  };
  const handleClick = (e) => {
   
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        dispatch({
          type: "SET_SNACKBAR_MESSAGE",
          payload: {
            message: "Only JPEG and PNG images are allowed!",
            endColor: "#f17d73",
            startColor: "#ffe2e0",
          },
        });
        e.target.value = "";
        return;
      }
      reader.onloadend = () => {
        const baseString = reader.result;
        dispatch({ type: "SET_PROFILE_PICTURE", payload: baseString });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="organization-pop-up">
      <img src={cross} alt="" onClick={onClose} className="pop-up-cross" />
      <div className="dp-container">
        <img src={img} alt="" />
      </div>
      <hr />
      <div className="popup-options-container">
        <button className="upload-button" onClick={handleButtonClick}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            onChange={handleClick}
          />
          <p>Upload from device</p>
          <img src={arrow} alt="" />
        </button>
        <hr />
        <button className="upload-button" style={{}} onClick={openAvatar}>
          <p>Select from the avatar</p>
          <img src={arrow} alt="" />
        </button>
        <hr />
        <div className="button-container">
          <button onClick={() => setPicture(img)}>Save</button>
          <button onClick={() => setPicture(dp)}>Cancel</button>
        </div>
      </div>
      <div className="avatar-container">
        {isAvatarOpen && (
          <AvatarPopUp
            isOpen={isAvatarOpen}
            onClose={closeAvatar}
            avatarList={avatarList}
          />
        )}
      </div>
    </div>
  );
};

export default PopUpComponent;

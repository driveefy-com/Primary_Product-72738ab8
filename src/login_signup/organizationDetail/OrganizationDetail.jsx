import SubmitButton from "../../common/buttons/SubmitButton";
import { FormComponents } from "../../common/form/FormComponents";
import { organizationDetail, organizationDetailAvatarList } from "../../common/form/FormData";
import "./styles/OrganizationDetail.scss";
import driveefylogo from "../../assets/icons/driveefy_logo.svg";
import profilePicture from "../../assets/icons/profilePicture.svg";
import React from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import PopUpComponent from "../../common/PopUp/popup/PopUpComponent";
import { Avatar } from "@mui/material";
import AvatarPopUp from "../../common/PopUp/avatar/AvatarPopUp";
export const OrganizationDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const location=useLocation();
  // const 

  // Check if the query param "popup" is set
  const isPopupOpen = searchParams.get("popup") === 'true';

  // Function to open the popup (adds query param)
  const openPopup = () => {
    setSearchParams({ popup: 'true' });
    console.log(searchParams);
  };
  // Function to close the popup (removes query param)
  const closePopup = () => {
    // searchParams.delete("popup");
    // setSearchParams(searchParams);
    setSearchParams({});
  };
  return (
    <div className="organization-main-container">
      <div className="driveefy-logo">
        <img src={driveefylogo} alt="" />
      </div>
      
      <div className="organization-text-container">
        <div className="organization-title-container">
          <h1>Organization Detail</h1>
        </div>
        <div className="organization-photo-container">
          <img src={profilePicture} alt="" onClick={openPopup} />
        </div>
        <div className="pop-up-container">
        <PopUpComponent isOpen={isPopupOpen} onClose={closePopup} avatarList={organizationDetailAvatarList}/>
        </div>
        <form action="" className="organization-form-container">
          {organizationDetail.map((item, index) => {
            return (
              <div key={index} className="grid-item">
                <h1>{item.name}</h1>
                <FormComponents
                  key={index}
                  formData={item}
                  onChange={() => {}}
                />
              </div>
            );
          })}
          <div className="organization-submit-button-container">
            <SubmitButton text={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

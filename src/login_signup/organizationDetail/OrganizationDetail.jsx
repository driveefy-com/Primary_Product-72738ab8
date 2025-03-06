import SubmitButton from "../../common/buttons/SubmitButton";
import { FormComponents } from "../../common/form/FormComponents";
import { organizationDetail, organizationDetailAvatarList } from "../../common/form/FormData";
import "./styles/OrganizationDetail.scss";
import driveefylogo from "../../assets/icons/driveefy_logo.svg";
import { useSearchParams } from "react-router-dom";
import PopUpComponent from "../../common/PopUp/popup/PopUpComponent";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import pen from "../../assets/icons/editProfilePictureIcon.svg";

export const OrganizationDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const isPopupOpen = searchParams.get("popup") === "true";
  const {savedImage} = useSelector((state) => state?.popup) || "";

  const openPopup = () => {
    setSearchParams({ popup: "true" });
  };

  const closePopup = () => {
    setSearchParams({});
  };

  return (
    <div className="organization-main-container">
      <div className="driveefy-logo">
        <img src={driveefylogo} alt="Driveefy Logo" />
      </div>
      
      <div className="organization-text-container">
        <div className="organization-title-container">
          <h1>{t("organizationDetail.title")}</h1>
        </div>
        <div className="organization-photo-container">
          <div 
            className="organization-dp-container" 
            style={{ backgroundImage: savedImage ? `url(${savedImage})` : "none" }}
          ></div>
          <img 
            src={pen} 
            className="organization-pen-icon" 
            alt="Edit Profile" 
            onClick={openPopup}
          />
        </div>
        <div className="pop-up-container">
          <PopUpComponent isOpen={isPopupOpen} onClose={closePopup} avatarList={organizationDetailAvatarList} />
        </div>
        <form action="" className="organization-form-container">
          {Array.isArray(organizationDetail) && organizationDetail.map((item, index) => (
            item ? (
              <div key={index} className="grid-item">
                <h1>{item.name || ""}</h1>
                <FormComponents
                  key={index}
                  formData={item}
                  onChange={() => {}}
                />
              </div>
            ) : null
          ))}
          <div className="organization-submit-button-container">
            <SubmitButton text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

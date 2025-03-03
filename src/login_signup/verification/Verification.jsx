import "./styles/Verification.scss";
import icon from "../../assets/icons/verificationPageIcon.svg";
import driveefylogo from "../../assets/icons/driveefy_logo.svg";
import { useTranslation } from "react-i18next";
export const Verification = () => {
  const {t}=useTranslation();
  return (
    <div className="verification-main-container">
      <div className="driveefy-logo">
        <img src={driveefylogo} alt="" />
      </div>
      <div className="verification-text-container">
        <div className="verification-text-innerbox-container">
          <div className="verification-logo-container">
            <img src={icon} alt="" />
          </div>
          <h1>{t('verifyEmail.title')}</h1>
          <p>
           {t('verifyEmail.message')}
          </p>
        </div>
      </div>
      <div className="verification-img-container"></div>
    </div>
  );
};

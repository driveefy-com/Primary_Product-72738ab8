import "./styles/Verification.scss";
import icon from "../../assets/icons/verificationPageIcon.svg";
import driveefylogo from "../../assets/icons/driveefy_logo.svg";
export const Verification = () => {
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
          <h1>Verify Your Email</h1>
          <p>
            Verification link has been sent to your email. Please verify your
            email
          </p>
        </div>
      </div>
      <div className="verification-img-container"></div>
    </div>
  );
};

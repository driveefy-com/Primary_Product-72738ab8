import "./styles/Verification.scss";
import signupVerification from "../../assets/icons/signupVerificationIcon.svg";
import driveefylogo from "../../assets/icons/driveefy_logo.svg";
import { useTranslation } from "react-i18next";
function EmailVerificationonSignup() {
    const token = JSON.parse(localStorage.getItem("data")).token
    const { t } = useTranslation();
    return (
        <div className="verification-main-container">
            <div className="driveefy-logo">
                <img src={driveefylogo} alt="" />
            </div>
            <div className="verification-text-container">
                <div className="verification-text-innerbox-container">
                    <div className="verification-logo-container">
                        <img src={signupVerification} alt="" />
                    </div>
                    {token ? <><h1 className='verification-header'>{t("verificationOnSignup.title")}</h1>
                        <p className='verification-content'>
                            {t("verificationOnSignup.message")}
                        </p></> : <span className="verification-link">
                        Click here to verify your email.
                    </span>}
                </div>
            </div>
            <div className="signup-verification-img-container"></div>
        </div>
    )
}

export default EmailVerificationonSignup
import { Link } from "react-router-dom";
import "./styles/CheckEmail.scss";
import icon from '../../assets/icons/checkEmailIcon.svg'
import { useTranslation } from "react-i18next";
export const CheckEmail = () => {
  const { t } = useTranslation();
  return (
    <div className="check-email-main-container">
      <div className="check-email-img-container"></div>
      <div className="check-email-form-container">
        <div className="check-email-text-container">
        <h1>{t('checkEmail.title')}</h1>
        <p>
         {t('checkEmail.message')}
        </p>
        {/* <div className="check-email-logo-container"> */}
          <img src={icon} alt="" />
        {/* </div> */}
        <h3 className="check-email-resend-email">
         {t('checkEmail.resend')}
          <Link to={'/'} className="Link"> {t('checkEmail.resendLink')}</Link>
        </h3>
        </div>
      </div>
    </div>
  );
};

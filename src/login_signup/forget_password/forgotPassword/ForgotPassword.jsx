import { useTranslation } from "react-i18next";
import { forgotPassword } from "../../../common/form/FormData";
import { FormComponents } from "../../../common/form/FormComponents";
import SubmitButton from "../../../common/buttons/SubmitButton";
import driveefylogo from "../../../assets/icons/driveefy_logo.svg";
import "./styles/ForgotPassword.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgot } from "../../../redux/actions/login_signup_Actions";
import { useNavigate } from "react-router-dom";
export const ForgotPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [formData, setformData] = useState({});
  const {isNavigateCheckEmail}=useSelector(state=>state.login_signup || {})
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgot(formData));
  };

   useEffect(() => {
      isNavigateCheckEmail ? navigate('/checkEmail') : ''
      dispatch({ type: "SET_NAVIGATE_CHECKEMAIL", payload: false });
    }, [isNavigateCheckEmail,navigate,dispatch]);


  return (
    <div className="forgot-password-main-container">
      <div className="forgot-password-img-container"></div>
      <div className="driveefy-logo">
        <img src={driveefylogo} alt="" />
      </div>
      <div className="forgot-password-form-container">
        <div className="forgot-password-text-container">
          <h1>{t("forgotPassword.title")}</h1>
          <p>{t("forgotPassword.message")}</p>
        </div>
        <div className="forgot-password-input-container">
          <h3>{t("forgotPassword.email")}</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            {forgotPassword.map((item, index) => {
              return (
                <FormComponents
                  key={index}
                  formData={item}
                  onChange={handleChange}
                />
              );
            })}
            <div className="forgot-password-button-container">
              <SubmitButton text={t("forgotPassword.submit")} type={"submit"} />
            </div>
          </form>
        </div>
      </div> 
    </div>
  );
};

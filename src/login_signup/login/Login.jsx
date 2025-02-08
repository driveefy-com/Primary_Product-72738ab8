import React from "react";
import "./styles/Login.scss";
import { useState } from "react";
import loginIcon from "../../assets/icons/loginIcon.jpg";
import { useTranslation } from "react-i18next";
import { loginPage } from "../../common/form/FormData";
import { FormComponents } from "../../common/form/FormComponents";
import { Link } from "react-router-dom";
import SubmitButton from "../../common/buttons/SubmitButton";
import GoogleIcon from '../../assets/icons/GoogleIcon.svg'
import driveefyLogo from '../../assets/icons/driveefy_logo.svg'
function Login() {
  const {t} = useTranslation();
  return (
    <div className="login-main-container">
      <div className="login-img-container">
        <div className="driveefy-logo">
        <img src={driveefyLogo} alt="" />
        </div>
      </div>
      <div className="login-form-container">
        <div className="login-icon-container">
        <img src={loginIcon} alt="" />
        </div>
        <h1>{t("loginPage.title")}</h1>
        <Link className="login-with-google">
          <img src={GoogleIcon} alt="" />
          {t("loginPage.googleLogin")}
        </Link>
        <div className="login-with-email-container">
          <hr />
          <p>{t("loginPage.emailLogin")}</p>
        </div>
        <div className="login-input-container">
        <form action="">
        {
          loginPage.map((item, index) => {
            return (
              <FormComponents 
              key={index}
              formData={item}/>
              );
        })}
          <Link className="link">{t("loginPage.forgot")}</Link>
          <div className="login-form-button-container">
          <SubmitButton text={t("loginPage.login")}/>
          </div>
        </form>
        </div>
        <h3>{t("loginPage.createAccount")}<Link className="create-account">{t("loginPage.linkText")}</Link></h3>
      </div>
    </div>
  );
}

export default Login;

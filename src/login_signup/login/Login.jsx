import "./styles/Login.scss";
import { useEffect, useState } from "react";
import loginIcon from "../../assets/icons/loginIcon.jpg";
import { useTranslation } from "react-i18next";
import { loginPage } from "../../common/form/FormData";
import { FormComponents } from "../../common/form/FormComponents";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../common/buttons/SubmitButton";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";
import driveefyLogo from "../../assets/icons/driveefy_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, loginUser } from "../../redux/actions/login_signup_Actions";
function Login() {
  const { t } = useTranslation();
  const [formData, setformData] = useState({});
  const dispatch = useDispatch();
  const {isNavigateOrganization}=useSelector(state=>state.login_signup || {});
  
  const navigate=useNavigate();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  const handleLoginWithGoogle=()=>{
    dispatch(googleLogin());
  }
  useEffect(() => {
    isNavigateOrganization?navigate('/organizationDetail'):''
    }, [isNavigateOrganization, navigate]);
 return (
    <div className="login-main-container">
      <div className="login-img-container"></div>
      <div className="driveefy-logo">
        <img src={driveefyLogo} alt="" />
      </div>
      <div className="login-form-container">
        <div className="login-icon-container">
          <img src={loginIcon} alt="" />
        </div>
        <h1>{t("loginPage.title")}</h1>
        <button className="login-with-google" onClick={handleLoginWithGoogle}>
          <img src={GoogleIcon} alt="" />
          {t("loginPage.googleLogin")}
        </button>
        <div className="login-with-email-container">
          <hr />
          <p>{t("loginPage.emailLogin")}</p>
        </div>
        <div className="login-input-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            {loginPage.map((item, index) => {
              return (
                <FormComponents
                  key={index}
                  onChange={handleChange}
                  formData={item}
                />
              );
            })}
            <Link className="link" to={"forgotPassword"}>
              {t("loginPage.forgot")}
            </Link>
            <div className="login-form-button-container">
              <SubmitButton text={t("loginPage.login")} type={'submit'}/>
            </div>
          </form>
        </div>
        <h3>
          {t("loginPage.createAccount")}
          <Link to={"/signup"} className="create-account">
            {t("loginPage.linkText")}
          </Link>
        </h3>
      </div>
    </div>
  )};

export default Login;

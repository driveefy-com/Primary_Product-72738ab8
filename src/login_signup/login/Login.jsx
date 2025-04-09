import "./styles/Login.scss";
import { useEffect, useState } from "react";
import loginIcon from "../../assets/icons/loginIcon.jpg";
import { useTranslation } from "react-i18next";
import { loginPage } from "../../common/form/FormData";
import { FormComponents } from "../../common/form/FormComponents";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../common/buttons/SubmitButton";
import driveefyLogo from "../../assets/icons/driveefy_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {  loginUser } from "../../redux/actions/login_signup_Actions";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import axios from "axios";
function Login() {
  const CLIENT_ID='567105166418-g82vkbc3tc88fk57tuo5cutbuc1rcdje.apps.googleusercontent.com'
  console.log(CLIENT_ID);
  
  const { t } = useTranslation();
  const [formData, setformData] = useState({});
  const dispatch = useDispatch();
  const {isNavigateOrganization}=useSelector(state=>state.login_signup || {});
  // const handleLoginSuccess = async (credentialResponse) => {
  //   try {
  //     const { credential } = credentialResponse;
  //     console.log("Google Credential Token:", credential);

  //     // Send the token to the backend
  //     const response = await axios.get(
  //       "http://localhost:5001/api/v1/authentication/auth/google",
  //       { token: credential }
  //     );

  //     console.log("Backend Response:", response.data);
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // };
  const navigate=useNavigate();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  // const handleLoginWithGoogle=()=>{
  //   dispatch(googleLogin());
  // }
  useEffect(() => {
    isNavigateOrganization?navigate('/organizationDetail'):''
    dispatch({type:"SET_NAVIGATE_ORGANIZATION",payload:false});
    }, [isNavigateOrganization, navigate,dispatch]);
 return (
  <GoogleOAuthProvider clientId={CLIENT_ID}>
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
        {/* <button className="login-with-google">
          <img src={GoogleIcon} alt="" />
          {t("loginPage.googleLogin")}
        </button> */}
        {/* <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.error("Login Failed")}
        /> */}
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
    </GoogleOAuthProvider>
  )};

export default Login;

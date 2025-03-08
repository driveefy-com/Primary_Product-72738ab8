import { useEffect, useState } from 'react'
import './styles/Signup.scss'
import { useTranslation } from 'react-i18next'
import { FormComponents } from '../../common/form/FormComponents';
import { signupPage } from '../../common/form/FormData';
import SubmitButton from '../../common/buttons/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import signupPageIcon from '../../assets/icons/signupPageIcon.svg'
import driveefyLogo from '../../assets/icons/driveefy_logo.svg'
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/actions/login_signup_Actions';
export const Signup = () => {
  const [email, setEmail] = useState("");
  const Navigate=useNavigate();
  JSON.parse(localStorage.getItem("data")).token?Navigate('/verifyEmail'):'';
  const [formData, setformData] = useState({
    "role": "Admin",
    "signupMethod": "Local"
  });
  const [error, seterror] = useState('')
  const { t } = useTranslation();
  const dispatch = useDispatch();
 

  const handleChange = (e) => {
    setformData({  ...formData, [e.target.name]: e.target.value });
  }
  
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // if(!validateForm) return;
    if (formData?.password !== formData?.secondPassword) {
      seterror('Password does not match');
      return;
    }
    if (!validatePassword(formData.password)) {
      seterror("Password must be at least 8 characters long and include one letter, one number, and one special character.");
      return;
    }
    seterror('');
    dispatch(signupUser(formData));
  }
  return (
    <div className="signup-main-container">
      <div className="signup-img-container">
      </div>
      <div className="driveefy-logo">
        <img src={driveefyLogo} alt="" />
      </div>
      <div className="signup-form-container">
        <div className="signup-form-logo">
          <img src={signupPageIcon} alt="" />
        </div>
        <h1>{t('signupPage.title')}</h1>
        <div className="signup-input-container">
          <form onSubmit={handleSubmit}>
            <div className="input-name-field">
              <FormComponents formData={signupPage[0]} onChange={handleChange} />
              <FormComponents formData={signupPage[1]} onChange={handleChange} />
            </div>
            <div className="input-info-field">
              {signupPage.slice(2).map((item, index) => {
                return (
                  <FormComponents formData={item} key={index} onChange={handleChange} />
                )
              })}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className="signup-form-button">
              <SubmitButton type={'submit'} text={t('signupPage.signupButton')} />
            </div>
          </form>
        </div>
        <h3>{t('signupPage.loginLink')}<Link to={'/'} className='link'>{t('signupPage.login')}</Link></h3>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react';
import './styles/Signup.scss';
import { useTranslation } from 'react-i18next';
import { FormComponents } from '../../common/form/FormComponents';
import { signupPage } from '../../common/form/FormData';
import SubmitButton from '../../common/buttons/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import signupPageIcon from '../../assets/icons/signupPageIcon.svg';
import driveefyLogo from '../../assets/icons/driveefy_logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/actions/login_signup_Actions';

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isNavigateVerifyEmail } = useSelector(state => state.login_signup || {});
  useEffect(() => {
    isNavigateVerifyEmail ? navigate('/verifyEmail') : ''
    dispatch({ type: "SET_NAVIGATE_VERIFICATION", payload: false });
  }, [isNavigateVerifyEmail,navigate]);

  const [formData, setFormData] = useState({
    role: "Admin",
    signupMethod: "Local",
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData?.password || !formData?.secondPassword) {
      setError("Please enter and confirm your password.");
      return;
    }

    if (formData.password !== formData.secondPassword) {
      setError('Password does not match');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError("Password must be at least 8 characters long and include one letter, one number, and one special character.");
      return;
    }

    setError('');
    dispatch(signupUser(formData));
  };

  return (
    <div className="signup-main-container">
      <div className="signup-img-container"></div>
      <div className="driveefy-logo">
        <img src={driveefyLogo} alt="Driveefy Logo" />
      </div>
      <div className="signup-form-container">
        <div className="signup-form-logo">
          <img src={signupPageIcon} alt="Signup Page Icon" />
        </div>
        <h1>{t('signupPage.title')}</h1>
        <div className="signup-input-container">
          <form onSubmit={handleSubmit}>
            <div className="input-name-field">
              <FormComponents formData={signupPage[0]} onChange={handleChange} />
              <FormComponents formData={signupPage[1]} onChange={handleChange} />
            </div>
            <div className="input-info-field">
              {signupPage.slice(2).map((item, index) => (
                <FormComponents formData={item} key={index} onChange={handleChange} />
              ))}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className="signup-form-button">
              <SubmitButton type="submit" text={t('signupPage.signupButton')} />
            </div>
          </form>
        </div>
        <h3>
          {t('signupPage.loginLink')}
          <Link to="/" className="link">{t('signupPage.login')}</Link>
        </h3>
      </div>
    </div>
  );
};

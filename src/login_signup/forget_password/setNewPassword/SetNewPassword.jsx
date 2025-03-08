import SubmitButton from '../../../common/buttons/SubmitButton'
import { FormComponents } from '../../../common/form/FormComponents'
import { setNewPassword } from '../../../common/form/FormData'
import './styles/setNewPassword.scss'
import driveefylogo from '../../../assets/icons/driveefy_logo.svg'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../../../redux/actions/login_signup_Actions'
import { useState } from 'react'
export const SetNewPassword = () => {
  const { t } = useTranslation();
  const [formData, setformData] = useState({});
  const dispatch = useDispatch();
  const [error, seterror] = useState('');
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    seterror('');
    dispatch(resetPassword(formData));
  }
  return (
    <div className="set-password-main-container">
      <div className="set-password-img-container">
      </div>
      <div className="driveefy-logo">
        <img src={driveefylogo} alt="" />
      </div>
      <div className="set-password-text-container">
        <div className="set-password-form-container">
          <h1>{t('setNewPassword.title')}</h1>
          <p>{t('setNewPassword.message')}</p>
          <div className="set-password-input-container">
            <form onSubmit={handleSubmit}>
              <h3>{t('setNewPassword.password')}</h3>
              <FormComponents onChange={handleChange} formData={setNewPassword[0]} />
              <h3>{t('setNewPassword.confirm')}</h3>
              <FormComponents onChange={handleChange} formData={setNewPassword[1]} />
              {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
              <div className="set-password-button-container">
                <SubmitButton type={'submit'} text={'Update Password'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

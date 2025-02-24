import SubmitButton from '../../../common/buttons/SubmitButton'
import { FormComponents } from '../../../common/form/FormComponents'
import { setNewPassword } from '../../../common/form/FormData'
import './styles/setNewPassword.scss'
import driveefylogo from '../../../assets/icons/driveefy_logo.svg'
import { useTranslation } from 'react-i18next'
export const SetNewPassword = () => {
  const{t}=useTranslation();
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
            <form action="">
            <h3>{t('setNewPassword.password')}</h3>
            <FormComponents formData={setNewPassword[0]}/>
            <h3>{t('setNewPassword.confirm')}</h3>
            <FormComponents formData={setNewPassword[1]}/>
            </form>
            <div className="set-password-button-container">
            <SubmitButton text={'Update Password'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

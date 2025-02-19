import { useTranslation } from "react-i18next"
import { forgotPassword } from "../../common/form/FormData";
import { FormComponents } from "../../common/form/FormComponents";
import SubmitButton from "../../common/buttons/SubmitButton";
import './styles/ForgotPassword.scss'
import { useState } from "react";
export const ForgotPassword = () => {
  const {t}=useTranslation();
   const [formData, setformData] = useState({});
    const handleChange=(e)=>{
      setformData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = () =>{}
  return (
   <div className="forgot-password-main-container">
    <div className="forgot-password-img-container"></div>
    <div className="forgot-password-form-container">
      <div className="forgot-password-text-container">
      <h1>{t('forgotPassword.title')}</h1>
      <p>{t('forgotPassword.message')}</p>
      </div>
      <div className="forgot-password-input-container">
        <h3>{t('forgotPassword.email')}</h3>
        <form onSubmit={handleSubmit}>
          {forgotPassword.map((item,index)=>{
            return(
              <FormComponents key={index} formData={item} onChange={handleChange}/>
            )
          })}
          <div className="forgot-password-button-container">
            <SubmitButton text={t('forgotPassword.submit')} type={'submit'}/>
          </div>
        </form>
      </div>
    </div>
   </div>
  )
}

<<<<<<< HEAD
import React, { useState,useEffect} from 'react'
=======
import  { useState,useEffect} from 'react'
>>>>>>> c55a6b1b9566ec007e4b59c92662da88423927a3
import './styles/Signup.scss'
import { useTranslation } from 'react-i18next'
import { FormComponents } from '../../common/form/FormComponents';
import { signupPage } from '../../common/form/FormData';
import SubmitButton from '../../common/buttons/SubmitButton';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../assets/icons/signupPageIcon.svg'
import driveefyLogo from '../../assets/icons/driveefy_logo.svg'
import {useDispatch} from 'react-redux';
export const Signup = () => {
   const [formData, setformData] = useState({});
   const { t } = useTranslation();
   const dispatch = useDispatch();
    const handleChange=(e)=>{
      setformData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch({type:'SIGNUP',payload:formData})
    }
    useEffect(() => {
      console.log(formData); // ✅ Logs the latest value after state updates
    }, [formData]);
  return (
    <div className="signup-main-container">
      <div className="signup-img-container">
        <img src={driveefyLogo} alt="" className='driveefy-logo'/>
      </div>
      <div className="signup-form-container">
        <div className="signup-form-logo">
        <img src={GoogleIcon} alt="" />
        </div>
        <h1>{t('signupPage.title')}</h1>
        <div className="signup-input-container">
          <form onSubmit={handleSubmit}>
            <div className="input-name-field">
              <FormComponents formData={signupPage[0]} onChange={handleChange}/>
              <FormComponents formData={signupPage[1]} onChange={handleChange}/>
            </div>
            <div className="input-info-field">
              {signupPage.slice(2).map((item,index)=>{
                return(
                  <FormComponents formData={item} key={index} onChange={handleChange}/>
                )
              })}
            </div>
            <div className="signup-form-button">
            <SubmitButton type={'submit'} text={'Sign up'}/>
            </div>
          </form>
        </div>
        <h3>Already have an account ?<Link to={'/'} className='link'> Login</Link></h3>
      </div>
    </div> 
  )
}

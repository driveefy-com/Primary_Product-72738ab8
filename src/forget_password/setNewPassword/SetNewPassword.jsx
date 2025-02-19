import SubmitButton from '../../common/buttons/SubmitButton'
import { FormComponents } from '../../common/form/FormComponents'
import { setNewPassword } from '../../common/form/FormData'
import './styles/SetNewPassword.scss'
export const SetNewPassword = () => {
  return (
    <div className="set-password-main-container">
      <div className="set-password-img-container">
      </div>
      <div className="set-password-text-container">
        <div className="set-password-form-container">
          <h1>Set a new password</h1>
          <p>Create a new password. Ensure it is different from the previous one for security</p>
          <div className="set-password-input-container">
            <form action="">
            <h3>Password</h3>
            <FormComponents formData={setNewPassword[0]}/>
            <h3>Confirm Password</h3>
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

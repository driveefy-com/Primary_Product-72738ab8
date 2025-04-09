import './styles/FleetOnboardingPage.scss'
import auto from '../../assets/icons/autoOnboardingIcon.svg'
import manual from '../../assets/icons/manualOnboardingIcon.svg'
import { Link } from 'react-router-dom';
function FleetOnboardingPage() {
  return (
    <div className="onboarding-main-container">
      <div className="onboarding-header">Onboarding Fleet</div>
      <div className="onboarding-border-container">
      <div className="onboarding-options-container">
        <div className="onboarding-boxes">
          <div className="onboarding-boxes-content-container">
            <img src={auto} alt="" className='onboarding-img' />
            <h2 className='onboarding-title'>Auto Onboarding</h2>
            <p>Upload fleet details or enter chassis number for automatic data fetch</p>
              <button className='onboarding-button'>Start Auto Onboarding</button>
          
          </div>
        </div>
        <div className="onboarding-boxes" >
          <div className="onboarding-boxes-content-container">
            <img src={manual} alt="" className='onboarding-img' />
            <h2 className='onboarding-title'>Manual Onboarding</h2>
            <p>Manually enter fleet details and documents</p>
            <Link className='onboarding-button' to={'/fleet/manualOnboarding'}>Start Manual Entry</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FleetOnboardingPage;
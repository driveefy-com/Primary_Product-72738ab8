import './styles/Navbar.scss'
import logo from '../../assets/icons/driveefy_logo.svg'
import bell from '../../assets/icons/bellIcon.svg'
import dp from '../../assets/icons/dashboardUserPicture.svg'
import dropdown from '../../assets/icons/dashboardDropdownIcon.svg'
import settings from '../../assets/icons/settingsIcon.svg'
export function Navbar() {
  return (
    <>
    <div className="navbar-container">
     <div className="navbar-logo-container">
      <img src={logo} alt="" />
     </div>
     <div className="navbar-links-container">
      <img src={bell} alt="" />
      <div className="user-profile">
        <img src={dp} alt="" />
        <div className="user-name">
          <h1>Moni Roy</h1>
          <p>User</p>
        </div>
        <img src={dropdown} alt="" />
      </div>
      <img src={settings} alt="" />
     </div>
    </div>
    {/* <Sidebar/> */}
    </>
  )
}

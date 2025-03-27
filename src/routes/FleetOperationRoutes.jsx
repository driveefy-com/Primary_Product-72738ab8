import { Outlet, Routes, Route } from 'react-router-dom'
import './styles/FleetOperationRoutes.scss'
import Sidebar from '../fleet_operations/sidebar/Sidebar'
import { Navbar } from '../fleet_operations/Navbar/Navbar'
import ProfilePage from '../fleet_operations/profilePage/ProfilePage'
import FleetOperationDashboard from '../fleet_operations/fleet_operation_dashboard/fleetOperationDashboard'
import FleetOnboardingPage from '../fleet_operations/fleet_Onboarding_Page/FleetOnboardingPage'
import FleetManualOnboarding from '../fleet_operations/fleet_Onboarding_Page/manualOnboardingPages/FleetManualOnboarding'
import LanguageSwitcher from '../common/languageSwitcher/LanguageSwitcher'
function FleetOperationRoutes() {
  return (
    <>
      <div className="language-switcher-fleet-container">
        <LanguageSwitcher />
      </div>
      <div className="fleet-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="sidebar-routes-container">
          <div className="sidebar-container">
            <Sidebar />
          </div>

          <Routes>
            <Route path="profilePage" element={<ProfilePage />} />
            <Route path="dashboard" element={<FleetOperationDashboard />} />
            <Route path="onboarding" element={<FleetOnboardingPage />} />
            <Route path="manualOnboarding" element={<FleetManualOnboarding />} />
          </Routes>
        </div>

        <div className="routes-container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default FleetOperationRoutes

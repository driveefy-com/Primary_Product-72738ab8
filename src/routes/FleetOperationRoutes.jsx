import {  Routes, Route } from 'react-router-dom'
import './styles/FleetOperationRoutes.scss'
import Sidebar from '../fleet_operations/sidebar/Sidebar'
import ProfilePage from '../fleet_operations/profilePage/ProfilePage'
import FleetOperationDashboard from '../fleet_operations/fleet_operation_dashboard/fleetOperationDashboard'
import FleetOnboardingPage from '../fleet_operations/fleet_Onboarding_Page/FleetOnboardingPage'
import FleetManualOnboarding from '../fleet_operations/fleet_Onboarding_Page/manualOnboardingPages/FleetManualOnboarding'
import LanguageSwitcher from '../common/languageSwitcher/LanguageSwitcher'
import FleetDetailPage from '../fleet_operations/fleet_detail/FleetDetailPage'
import FleetJourneyHistoryPage from '../fleet_operations/fleet_detail/fleet_journey_list/FleetJourneyHistoryPage'
import close from '../assets/icons/sidebarCloseButton.svg'
import { useState } from 'react'
import FleetGroupsContainer from '../fleet_operations/create_fleet_group/FleetGroupsContainer'
import CreateFleetGroup from '../fleet_operations/create_fleet_group/CreateFleetGroup'
import CreatedGroupPage from '../fleet_operations/create_fleet_group/CreatedGroupPage'
import VendorManagementDashboard from '../fleet_operations/vendorManagement/VendorManagementDashboard'
import VendorDetailsPage from '../fleet_operations/vendorManagement/VendorDetails'
import Navbar from '../fleet_operations/Navbar/Navbar'
function FleetOperationRoutes() {
  const [showSidebar, setshowSidebar] = useState(true);
  return (
    <>
      <div className="language-switcher-fleet-container">
        <LanguageSwitcher />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="fleet-container">
        {showSidebar && <div className="sidebar-container">
          <Sidebar />
          <img src={close} alt="" className='sidebar-close-icon' onClick={() => { setshowSidebar(false) }} />
        </div>}
        <div className="routes-container" style={{ width: showSidebar ? '80%' : '100%' }}>
          <Routes>
            <Route path="profilePage" element={<ProfilePage />} />
            <Route path="dashboard" element={<FleetOperationDashboard />} />
            <Route path="onboarding" element={<FleetOnboardingPage />} />
            <Route path="manualOnboarding" element={<FleetManualOnboarding />} />
            <Route path='fleetDetail' element={<FleetDetailPage />} />
            <Route path='journeyHistory' element={<FleetJourneyHistoryPage />} />
            <Route path='fleetGroups' element={<FleetGroupsContainer />} />
            <Route path='createFleet' element={<CreateFleetGroup/>} />
            <Route path='createdGroup' element={<CreatedGroupPage/>}/>
            <Route path='vendorManagement' element={<VendorManagementDashboard/>}/>
            <Route path='vendorDetails' element={<VendorDetailsPage/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default FleetOperationRoutes

import { Outlet } from 'react-router-dom'
import './styles/FleetOperationRoutes.scss'
import Sidebar from '../fleet_operations/sidebar/Sidebar'
import { Navbar } from '../fleet_operations/Navbar/Navbar'
function FleetOperationRoutes() {
  return (
    <div className="fleet-container">
     <Navbar />
     <Sidebar />
     <Outlet />
    </div>
  )
}

export default FleetOperationRoutes

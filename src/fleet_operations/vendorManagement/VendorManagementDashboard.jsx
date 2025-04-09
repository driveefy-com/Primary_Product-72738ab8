import './styles/VendorManagementDashboard.scss'
import FleetHistoryTable from '../fleet_operation_dashboard/components/FleetHistoryTable'
import DashboardBoxes from '../fleet_operation_dashboard/components/DashboardBoxes'
import { vendorManagementDashboardBoxes } from '../../common/form/FormData'
import VendorHistoryTable from './components/VendorHistoryTable'
function VendorManagementDashboard() {
    return (
        <div className="dashboard-main-container">
            {/* <div className="dashboard"> */}
                <div className="dashboard-heading">Vendor Management</div>
                <div className="dashboard-box-container">
                    {vendorManagementDashboardBoxes.map((item, index) => (
                        <DashboardBoxes button={localStorage.getItem(item.value) || item.buttonText} img={item.img} number={localStorage.getItem(item.value) || 'NA'} title={item.title} type={item.type} key={index} />
                    )
                    )}
                </div>
                <VendorHistoryTable/>
            {/* </div> */}
        </div>
    )
}

export default VendorManagementDashboard
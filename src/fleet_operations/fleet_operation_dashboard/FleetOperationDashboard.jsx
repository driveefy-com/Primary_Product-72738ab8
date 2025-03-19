import './styles/FleetOperationDashboard.scss'
import DashboardBoxes from './components/DashboardBoxes'
import { fleetOperationDashboardBoxes } from '../../common/form/FormData'

import FleetHistoryTable from './components/FleetHistoryTable'
function FleetOperationDashboard() {
    return (
        <div className="dashboard-main-container">
            <div className="dashboard-heading">Fleet Operation</div>
            <div className="dashboard-box-container">
                {fleetOperationDashboardBoxes.map((item, index) => (
                    <DashboardBoxes button={localStorage.getItem(item.value) || item.buttonText} img={item.img} number={localStorage.getItem(item.value) || 'NA'} title={item.title} type={item.type} key={index} />
                )
                )}
            </div>
            <FleetHistoryTable/>
        </div>
    )
}

export default FleetOperationDashboard
import { Link } from 'react-router-dom';
import './styles/DashboardBoxes.scss'

function DashboardBoxes({ title, img, number, type, button }) {
    switch (type) {
        case ('button'):
            return (
                <div className="dashboard-box-main-container">
                    <div className="dashboard-heading-img-container">
                        <h3 className="dashboard-box-heading">{title}</h3>
                        <img src={img} alt="" />
                    </div>
                    <div className="dashboard-number-container">
                        <h1>{number}</h1>
                        <Link to={'/fleet/onboarding'} className="dashboard-box-button" >{button}</Link>
                    </div>
                </div>
            )
        case ('graph'):
            return(
                <div className="dashboard-box-main-container">
                    <div className="dashboard-heading-img-container">
                        <h3 className="dashboard-box-heading">{title}</h3>
                        <img src={img} alt="" />
                    </div>
                    <div className="dashboard-number-container">
                        <h1>{number}</h1>
                        <p className="dashboard-box-graph">{button}</p>
                    </div>
                </div>
            )
        default:
            return;
    }
}

export default DashboardBoxes
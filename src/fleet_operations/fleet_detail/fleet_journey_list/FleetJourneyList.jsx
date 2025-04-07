import React from 'react'
import './styles/FleetJourneyList.scss'
import EyeOpen from "../../../assets/icons/EyeOpen.svg";
import { fleetJourneyList } from '../../../common/form/FormData';
function FleetJourneyList() {
    const currentData = Array.from({ length:30}, (_, index) => ({
        id: index + 1,
        name: "NA",
        age: "NA",
        city: "NA",
        country: "NA",
        email: "NA",
        phone: "NA",
        status: "NA",
        role: "NA",
    }));
    return (
        <div className="fleet-journey-main-container">
            <h1 className="fleet-journey-header">
                Journey List
            </h1>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {fleetJourneyList.map((item, index) => (
                                <th key={index}>{item}</th> // ✅ FIXED: Added key={index}
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row) => ( // ✅ FIXED: Now using currentData instead of dataArray
                            <tr className='fleet-journey-tr' key={row.id}>
                                <td >{row.id}</td>
                                <td >{row.name}</td>
                                <td >{row.age}</td>
                                <td>{row.city}</td>
                                <td >{row.country}</td>
                                <td >{row.phone}</td>
                                <td >{row.status}</td>
                                <td >{row.role}</td>
                                <td ><img src={EyeOpen} alt="" className='fleet-history-eye-icon' /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FleetJourneyList
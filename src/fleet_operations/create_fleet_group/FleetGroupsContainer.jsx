import React from 'react'
import './styles/FleetGroups.scss'
import search from '../../assets/icons/searchIcon.svg'
import eye from '../../assets/icons/eyeIcon.svg';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import { Link } from 'react-router-dom';

function FleetGroupsContainer() {
    const dataArray = Array.from({ length: 60 }, (_, index) => ({
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
        <div className="create-fleet-one-main-container">
            <h1 className="create-fleet-header">Fleet Groups</h1>
            <div className='create-fleet-heading-button'>
                <div className="create-fleet-search-component">
                    <input type="text" placeholder='Search by Fleet Group' className='search-fleet-group' />
                    <img src={search} alt="" className='search-button' />
                </div>
                <Link to={'/fleet/onboarding'} className="create-group-button">+ Create Group</Link>
            </div>
            <table className="create-fleet-custom-table">
                <thead>
                    <tr>
                        <td className='create-fleet-thead'>Group Name:</td>
                        <td className='create-fleet-thead'>Created Date:</td>
                        <td className='create-fleet-thead'>Total Fleet:</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td><h3 className='create-fleet-table-group-header'>Group 1</h3><p className='create-fleet-table-group-title'>Fleet group for city-wide deliveries</p></td>
                        <td className='create-fleet-table-data'>fofo</td>
                        <td className='create-fleet-table-data'>rdi</td>
                        <td><img src={eye} alt="" className='table-icon' /></td>
                        <td><img src={deleteIcon} alt="" className='table-icon' /></td>
                    </tr>
                    <tr>
                        <td><h3 className='create-fleet-table-group-header'>Group 1</h3><p className='create-fleet-table-group-title'>Fleet group for city-wide deliveries</p></td>
                        <td className='create-fleet-table-data'>fofo</td>
                        <td className='create-fleet-table-data'>rdi</td>
                        <td><img src={eye} alt="" className='table-icon' /></td>
                        <td><img src={deleteIcon} alt="" className='table-icon' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FleetGroupsContainer
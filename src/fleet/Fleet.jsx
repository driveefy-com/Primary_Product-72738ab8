import React from 'react'
import './styles/Fleet.scss'
import logo from '../assets/icons/driveefy_logo.svg'
function Fleet() {
  return (
   <div className="sidebar-main-container">
    <div className="logo-dashboard-container">
        <div className="logo-container">
            <img src={logo} alt="" />
        </div>
        <div className="dashboard-container">
            <img src="" alt="" />
            <button>close</button>
        </div>
        <hr />
    </div>
   </div>
  )
}

export default Fleet
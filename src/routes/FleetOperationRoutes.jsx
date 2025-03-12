import React from 'react'
import { Routes, Route, Router, Outlet } from 'react-router-dom'
import ProfilePage from '../fleet_operations/profilePage/ProfilePage'
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

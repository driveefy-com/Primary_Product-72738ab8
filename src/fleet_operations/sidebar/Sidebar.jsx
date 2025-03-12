import React from 'react'
import './styles/Sidebar.scss'
import { sidebarItems } from '../../common/form/FormData'
import dashboard from '../../assets/icons/sidebarDashboardIcon.svg'
import questionMark from '../../assets/icons/sidebarQuestionMark.svg'
function Sidebar() {
  return (
    <div className="sidebar-main-container">
      <div className="sidebar-dashboard-container">
      <img src={dashboard} alt="" className='sidebar-img'/>
      <p>Dashboard</p>
      </div>
      <hr/>
      <div className="sidebar-items-container">
        {
          sidebarItems.map((item, index) => {
            return (
              <div key={index} className='sidebar-item'>
                <img src={item.img} alt="" className='sidebar-img'/>
                <p>{item.title}</p>
              </div>
            )
            })
        }
        </div>
        <div className="sidebar-footer-container">
          <img src={questionMark} alt="" className='sidebar-img'/>
          <h1>Need help?</h1>
          <p>Please reach out to us</p>
          <button>Contact Us</button>
        </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import "./UserPage.scss"
import LeftSideLogo from "./image/userPageLogo.png"
import DashboardIcons from "./image/Menu icons/DashBoard.png"
import InvoiceIcons from "./image/Menu icons/Ticket.png"
import ScheduleIcons from "./image/Menu icons/Document.png"
import CalendarIcons from "./image/Menu icons/Calendar.png"
import NotificationIcons from "./image/Menu icons/Notification.png"
import SettingIcons from "./image/Menu icons/Setting.png"
import imageHere from "./image/userImage.png"
import excelIcons from "./image/microsoft-excel-icon.png"

export default function UserPage() {
  return (
    <div className='UserPage'>
      <div className="leftSideMenu">
        <div className="menulist">
          <div className='leftSideMenuLogo'>
            <div className='MainLogoUserPage'>
              <img src={LeftSideLogo} alt="Logo" />
            </div>
            <div className='BaseText'>
              base
            </div>
          </div>
          <div className="menuItems">
            <ul>
              <li><a href="#Dashboard"><img src={DashboardIcons} alt="" />Dashboard</a></li>
              <li><a href="#Dashboard"><i class="fa-solid fa-square-poll-vertical"></i>Upload</a></li>
              <li><a href="#Dashboard"><img src={InvoiceIcons} alt="" />Invoice</a></li>
              <li><a href="#Dashboard"><img src={ScheduleIcons} alt="" />Schedule</a></li>
              <li><a href="#Dashboard"><img src={CalendarIcons} alt="" />Calendar</a></li>
              <li><a href="#Dashboard"><img src={NotificationIcons} alt="" />Notification</a></li>
              <li><a href="#Dashboard"><img src={SettingIcons} alt="" />Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="UserPageMain">
        <div className='userPageHead'>
          <div className="UploadCSV">
            Upload CSV
          </div>
          <div className='RightSideHead'>
            <div>
              <a href="#Notifications"><i class="fa-regular fa-bell"></i></a>
            </div>
            <div>
              <img src={imageHere} alt="" />
            </div>
          </div>
        </div>
        <div className="userPageBody">

          <div className="uploadFileHere">
            <div className='excelSheetHere'>
              <input type="file" id='uploadBtn' />
              <label htmlFor="uploadBtn">  <div>
                <img src={excelIcons} alt="" />
              </div>
                <div className='browserHere'>
                  <p>Drop your excel sheet here or <span>browse</span></p>
                </div></label>

            </div>
            <div className='uploadBtnHere'>
              <input type="file" id='uploadBtn' />
              <label htmlFor="uploadBtn">
                <i class="fa-solid fa-arrow-up-from-bracket"></i> <span>upload</span>
              </label>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

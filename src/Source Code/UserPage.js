import React, { useState } from 'react'
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

  const [dropDown, setDropDown] = useState({
    para: "Drop your excel sheet here or",
    link: "browse"
  })

  function allowDrop(ev) {
    ev.preventDefault();
  }
  // function drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  // }

  const dragValue = () => {
    const droparea = document.getElementById("dragDrop")
    const pervent = (e) => e.preventDefault();

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(dragElement => {
      droparea.addEventListener(dragElement, pervent)
    });
    droparea.addEventListener("drop", handelDropEvent)
  }
  document.addEventListener("DomContentLoaded", dragValue)

  const handelDropEvent = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    console.log(files)
  }

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
              <li className='active' id="Active"><a href="#Upload" ><i class="fa-solid fa-square-poll-vertical"></i>Upload</a></li>
              <li><a href="#Invoice"><img src={InvoiceIcons} alt="" />Invoice</a></li>
              <li><a href="#Schedule"><img src={ScheduleIcons} alt="" />Schedule</a></li>
              <li><a href="#Calendar"><img src={CalendarIcons} alt="" />Calendar</a></li>
              <li><a href="#Notification"><img src={NotificationIcons} alt="" />Notification</a></li>
              <li><a href="#Settings"><img src={SettingIcons} alt="" />Settings</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="UserPageMain">
        <div className='MenuListBtn'>
          <div className='leftSideHeadMobile'>
            <button class="btn d-flex justify-content-between" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
              <div> <i class="fa-solid fa-bars"></i></div>
            </button>
            <div className='d-flex userPageHeadMobile'>
              <div className='leftSideMenuLogo d-flex'>
                <div className='MainLogoUserPage'>
                  <img src={LeftSideLogo} alt="Logo" />
                </div>
                <div className='BaseText'>
                  base
                </div>
              </div>
            </div>
          </div>
          <div className='RightSideHead d-flex'>
            <div>
              <a href="#Notifications"><i class="fa-regular fa-bell"></i></a>
            </div>
            <div>
              <img src={imageHere} alt="" />
            </div>
          </div>
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
              <div className="menulistMobile">
                <div className='leftSideMenuLogo'>
                  <div className='menuHead'>
                    <div className='d-flex'>
                      <div className='MainLogoUserPage'>
                        <img src={LeftSideLogo} alt="Logo" />
                      </div>
                      <div className='BaseText'>
                        base
                      </div>
                    </div>
                    <div className='closeBtn'>
                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                  </div>
                </div>
                <div className="menuItems">
                  <ul>
                    <li><a href="#Dashboard"><img src={DashboardIcons} alt="" />Dashboard</a></li>
                    <li className='active ' data-bs-dismiss="offcanvas" aria-label="Close" id="Active"><a href="#Upload" ><i class="fa-solid fa-square-poll-vertical"></i>Upload</a></li>
                    <li><a href="#Invoice"><img src={InvoiceIcons} alt="" />Invoice</a></li>
                    <li><a href="#Schedule"><img src={ScheduleIcons} alt="" />Schedule</a></li>
                    <li><a href="#Calendar"><img src={CalendarIcons} alt="" />Calendar</a></li>
                    <li><a href="#Notification"><img src={NotificationIcons} alt="" />Notification</a></li>
                    <li><a href="#Settings"><img src={SettingIcons} alt="" />Settings</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <label htmlFor="uploadBtn" id='dragDrop'>
                <div>
                  <img src={excelIcons} alt="" />
                </div>
                <div className='browserHere' onDrop={dragValue} ondragover={allowDrop}>
                  <p>{`${dropDown.para}`} <span>{`${dropDown.link}`}</span></p>
                </div>
              </label>
            </div>
            <div className='uploadBtnHere'>
              <label htmlFor="">
                <i class="fa-solid fa-arrow-up-from-bracket"></i> <span>upload</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

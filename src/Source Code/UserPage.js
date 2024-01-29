import React, { useRef, useState } from 'react'
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
import * as XLSX from 'xlsx';


export default function UserPage() {


  const [files, setFiles] = useState(null);
  const [dropDown] = useState({
    para: "Drop your excel sheet here or",
    link: "browse"
  })
  const [excelData, setExcelData] = useState(null);
  const [uploadFiles, setUploadFiles] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles(e.target.files)

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          setExcelData(jsonData);
        } catch (error) {
          console.error('Error reading Excel file:', error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };
  const UploadFilesHere = () => {

    setUploadFiles(() => {
      return (
        <div>
          {excelData && (
            <table className='table' border="1">
              <thead>
                <tr>
                  {excelData[0].map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )
    })
  }

  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setFiles(event.dataTransfer.files)
  };

  const dragFile = (e) => {
    setFiles(true)
    var disableInput = document.getElementById("uploadBtn")
    disableInput.removeAttribute("disabled", "")
  }
  const RemoveFile = () => {
    setFiles(false)
    setExcelData(null)
    setUploadFiles(null)
    var disableInput = document.getElementById("uploadBtn")
    disableInput.setAttribute("disabled", "")
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
                    <li><a href="#Dashboard" data-bs-dismiss="offcanvas" aria-label="Close"><img src={DashboardIcons} alt="" />Dashboard</a></li>
                    <li className='active ' data-bs-dismiss="offcanvas" aria-label="Close" id="Active"><a href="#Upload" ><i class="fa-solid fa-square-poll-vertical"></i>Upload</a></li>
                    <li><a href="#Invoice" data-bs-dismiss="offcanvas" aria-label="Close"><img src={InvoiceIcons} alt="" />Invoice</a></li>
                    <li><a href="#Schedule" data-bs-dismiss="offcanvas" aria-label="Close"><img src={ScheduleIcons} alt="" />Schedule</a></li>
                    <li><a href="#Calendar" data-bs-dismiss="offcanvas" aria-label="Close"><img src={CalendarIcons} alt="" />Calendar</a></li>
                    <li><a href="#Notification" data-bs-dismiss="offcanvas" aria-label="Close"><img src={NotificationIcons} alt="" />Notification</a></li>
                    <li><a href="#Settings" data-bs-dismiss="offcanvas" aria-label="Close"><img src={SettingIcons} alt="" />Settings</a></li>
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
              <div
                className="dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <button onClick={() => inputRef.current.click()}>
                  <label htmlFor="#uploadBtn" id='dragDrop'>
                    <div>
                      <img src={excelIcons} alt="" />
                    </div>
                    <div className='browserHere'  >
                      {
                        files ?
                          (
                            <div className='UploadedFileName'>
                              <div> <span>
                                {Array.from(files).map((file, idx) => <p key={idx}>{file.name}</p>)}
                              </span>
                              </div>

                              <div className='fileRemove'>
                                <button className='btn' onClick={RemoveFile}>remove </button>
                              </div>

                            </div>

                          ) : (
                            <p onClick={dragFile}>{`${dropDown.para}`} <span>{`${dropDown.link}`}</span></p>
                          )
                      }
                    </div>
                  </label>
                  <input
                    type="file"
                    id='uploadBtn'
                    onChange={handleFileChange}
                    hidden
                    accept=".xlsx, .xls"
                    ref={inputRef}
                  />
                </button>
              </div>
            </div>
            <div className='uploadBtnHere' >
              <label htmlFor="" >
                <button type='button' onClick={UploadFilesHere}>
                  <i class="fa-solid fa-arrow-up-from-bracket"></i> <span>upload</span>
                </button>
              </label>
            </div>
          </div>
        </div>
        <div>
          {uploadFiles}
        </div>
      </div>
    </div>
  )
}

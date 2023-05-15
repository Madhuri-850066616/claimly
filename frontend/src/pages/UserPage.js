import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UserPage.css";
import React from 'react';
// import { useLocation } from "react-router-dom";
const UserPage = () => {
  // const location = useLocation();
  // const user = location.state.user;
  const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');



  const onFrameButtonClick = useCallback(() => {
  
    navigate("/bank");
  }, [navigate]);

  const onHeaderClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);


  return (
    
    
    <div className="user-page">
        <div className="user-page-child" />
        <div className="icon-user-parent">
          <img className="icon-user" alt="" src="/-icon-user.svg" />
          <div className="priyanshu-priyanshugmailcom-container">
            <span className="priyanshu-priyanshugmailcom-container1">
             <p className="priyanshu">{user.username}</p>
              <p className="priyanshu">{user.email_id}</p>
              <p className="priyanshu">{user.phone_no}</p>
              <p className="priyanshu">{user.dob.substring(0,10)}</p>
               </span>
          </div>
        </div>
        <div className="your-claim-status-parent">
          <div className="your-claim-status">Your Claim Status</div>
          <div className="frame-child" />
        </div>
        <button className="file-claim-wrapper" onClick={onFrameButtonClick}>
          <div className="file-claim">File Claim</div>
        </button>
        <button className="header4" onClick={onHeaderClick}>
          <img className="logo-icon5" alt="" src="/logo3@2x.png" />
        </button>
        <div className="frame-parent">
        <><div class="tableFixHead">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Policy Type</th>
            <th>Claim Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11-10-2020</td>
            <td>Term Life</td>
            <td>Claimed</td>
          </tr>
          <tr>
            <td>05-07-2021 </td>
            <td>Bike</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>08-09-2022</td>
            <td>Medical</td>
            <td>Claimed</td>
          </tr>
          <tr>
            <td>02-03-2023</td>
            <td>Car</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div></>
        </div>
        <div className="img-container">
        <div className="fixed-rectangle">
          <img className="img-icon7" alt="" src="/img.svg" />
          <button
            className="microsoftteams-image-1-27"
            onClick={onMicrosoftTeamsImage12Click} />
          
          <div className="contact-us-parent4">
            <div className="contact-us7">Contact US</div>
            <div className="email-claimlygmailcom7">Email: claimly@gmail.com</div>
            <div className="ph-no-917">Ph No: +91 876543210</div>
          </div>
          <img className="group-child17" alt="" src="/frame-3424.svg" />
        </div>
        </div>
      </div>
  );
};

export default UserPage;

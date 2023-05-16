import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserPage.css";
import React from 'react';
import { useLocation } from "react-router-dom";
import Dropdown from './dropdown.js';
import axios from "axios";
const UserPage = () => {
  const location = useLocation();
  const user = location.state.user;
  const navigate = useNavigate();


const userid=user._id
console.log(userid)



  const [claim, setclaim] = useState([]);
  useEffect(() => {

      const fetchClaims = async () => {
    
     try {
    
      const response = await axios.get(`https://random-jl1z.onrender.com/claims/claim/user/${userid}`);
    
      setclaim(response.data);
           console.log(response)
    
     } catch (error) {
    
    console.error(error);
    
    }
    
    };
    
    
    
    fetchClaims();
     } ,[]);

  
  
  



  const onFrameButtonClick = useCallback(() => {
  
    navigate("/bank",{ state: { user }});
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
              <p className="priyanshu">{user.dob.substring(0, 10)}</p>
           
               </span>
          </div>
        </div>
        <Dropdown/>
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
            
            <th>Filed Date</th>
            <th>Policy Type</th>
            <th>Claim Status</th>
            <th>Comments</th>
            <th>Claim ID</th>
          </tr>
        </thead>
        <tbody>
          {
            claim.map((claim)=>(
              <tr key={claim._id}>
                <td>{claim.createdAt.substring(0, 10)}</td>
                <td>{claim.policy_type}</td>
                <td>{claim.status}</td>
                <td>{claim.Comments}</td>
                <td>{claim._id}</td>
              </tr>

            ))
          }
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

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GeneralDetails.css";
import { useLocation } from "react-router-dom";
import React,{useState} from 'react';
import Dropdown from './dropdown.js';
const GeneralDetails = () => {
  const location = useLocation();
  const user = location.state.user;
  const [claims,setClaims] = useState({
    uin:"",nominee_name:"",policy_number:"",nominee_relation:"",policy_type:"",bank_branch:"",account_number:"",ifsc_code:""
  });
  let name,value;
  const handleInputs = (e)=>{
    console.log(e);
    name =e.target.name;
    value =e.target.value;
    
    setClaims({...claims,[name]:value})

  }

  const PostData = async(e)=>{
    
    e.preventDefault();
    const id = localStorage.getItem('claim_id')

    if(claims.uin != "" && claims.nominee_name!= "" && claims.policy_number!= "" && claims.nominee_relation!= "" && claims.policy_type!= "" && claims.bank_branch!= "" && claims.account_number!= "" && claims.ifsc_code!="")
    {
  const{uin, nominee_name,policy_number,nominee_relation,policy_type,bank_branch,account_number,ifsc_code} =claims;
      const res = fetch(`/claims/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          uin, nominee_name,policy_number,nominee_relation,policy_type,bank_branch,account_number,ifsc_code
        }),
      });
      onClaimClick();}
    }
    // else statement for alert
  const navigate = useNavigate(); 

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconPersonClick = useCallback(() => {
    navigate("/user-page", {state: {user}});
  }, [navigate]);

  const onClaimClick = useCallback(() => {
    navigate("/user-page", {state: {user}});
  }, [navigate]);

  return (
    <div className="general-details">
      <div className="footer4">
        <img className="img-icon4" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-24"
          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="contact-us-parent1">
          <div className="contact-us4">Contact US</div>
          <div className="email-claimlygmailcom4">Email: claimly@gmail.com</div>
          <div className="ph-no-914">Ph No: +91 876543210</div>
        </div>
        <img className="footer-child1" alt="" src="/frame-3422.svg" />
      </div>
      <div className="step-4-container">
        <span>{`Step 4 - Enter `}</span>
        <span className="required-details4">Required Details</span>
      </div>
      <div className="logo-container">
        <img
          className="logo-icon2"
          alt=""
          src="/logo@3x.png"
          onClick={onLogoImageClick}
        />
        
      </div>
      <div className="insurance-details-wrapper">
        <div className="insurance-details">INSURANCE DETAILS</div>
      </div>
      <Dropdown/>
      <form method="PUT">
      <div className="uincustomer-no-parent">
        <div className="uincustomer-no">UIN/Customer No</div>
        <input className="group-child10" type="text" value ={claims.uin} name="uin" onChange = {handleInputs}  id="uin" />
      </div>
      <div className="nominee-name-group">
        <div className="nominee-name1">Nominee Name</div>
        <input className="group-child10" type="text" value ={claims.nominee_name} name="nominee_name" onChange = {handleInputs}  id="nominee_name"/>
      </div>
      <div className="policy-number-parent">
        <div className="policy-number">Policy Number</div>
        <input className="group-child10" type="text" value ={claims.policy_number} name="policy_number" onChange = {handleInputs} id="policy_number"/>
      </div>
      <div className="nominee-relation-parent">
        <div className="nominee-relation">Nominee Relation</div>
        <input className="group-child10" type="text" value ={claims.nominee_relation} name="nominee_relation" onChange = {handleInputs} id="nominee_relation"/>
      </div>
      <div className="policy-typename-parent">
        <div className="policy-typename">Policy Type/Name</div>
        <input className="group-child10" type="text" value ={claims.policy_type} name="policy_type" onChange = {handleInputs} id="policy_type"/>
      </div>
      <div className="bank-details1">BANK DETAILS</div>
      <div className="b33">
        <div className="bank-branch1">Bank Branch</div>
        <input className="b3-child1" type="text" value ={claims.bank_branch} name="bank_branch" onChange = {handleInputs} id="bank_branch"/>
      </div>
      <div className="b13">
        <div className="account-number">Account Number</div>
        <input className="b3-child1" type="text" value ={claims.account_number} name="account_number" onChange = {handleInputs}  id="account_number"/>
      </div>
      <div className="b43">
        <div className="ifsc-code1">IFSC Code</div>
        <input className="b3-child1" type="text" value ={claims.ifsc_code} name="ifsc_code" onChange = {handleInputs} id="ifsc_code"/>
      </div>
      <button className="claim4" onClick={PostData}>
        <button className="claim-child1" />
        <b className="finish">Finish</b>
      </button>
      </form>
    </div>
  );
};

export default GeneralDetails;
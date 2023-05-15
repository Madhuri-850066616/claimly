import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Term.css";
import { useLocation } from "react-router-dom";
import React,{useState} from 'react';
import Dropdown from './dropdown.js';
const Term = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const[claims,setUser] =useState({
    cause_of_death:"",
    dod:"",
    claim_amount:"",

  });

  let name,value;
  const handleInputs=(e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...claims,[name]:value})
  }
const [claims_proof,setclaimImage]=useState({name:'',url:''});
 const [aadhar_proof,setaadharImage]=useState({name:'',url:''});

 const onFileChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    setclaimImage({ name: file?.name, url: reader.result });
  };
  reader.readAsDataURL(file);
};


  const onFileChanges = (event) => {
   const file = event.target.files[0];
const reader = new FileReader();
reader.onload = () => {
setaadharImage({ name: file?.name, url: reader.result });
};
reader.readAsDataURL(file);
};


      console.log('test1',aadhar_proof)
      console.log('test2',claims_proof)

      const UpdateData=async(e)=>{
        e.preventDefault();
        console.log(e)
        const id= localStorage.getItem('claim_id')
        console.log("inside",id)
        const{cause_of_death,dod,claim_amount}=claims;
        const res = fetch(`/claims/image/${id}`,{
          method:"PUT",
          headers:{
            "content-Type":"application/json"
          },body:JSON.stringify({
            cause_of_death,dod,claim_amount,aadhar_proof,claims_proof
          })
    
        });
        onClaimClick();
  }

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
     navigate("/general-details", {state: {user}});
  }, [navigate]);

  return (
    <div className="term">
      <div className="footer3">
        <img className="img-icon3" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-23"
          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="frame-div">
          <div className="contact-us3">Contact US</div>
          <div className="email-claimlygmailcom3">Email: claimly@gmail.com</div>
          <div className="ph-no-913">Ph No: +91 876543210</div>
        </div>
        <img className="frame-icon" alt="" src="/frame-3421.svg" />
      </div>
      <div className="step-3-container3">
        <span>{`Step 3 - Enter `}</span>
        <span className="required-details3">{`Required Details `}</span>
      </div>
      <div className="logo-group">
        <img
          className="logo-icon1"
          alt=""
          src="/logo@3x.png"
          onClick={onLogoImageClick}
        />
       
      </div>
      <Dropdown/>
      <form method = "PUT">
      <button className="claim3" onClick={UpdateData}>
        <button className="rectangle-button" />
        <b className="next3">Next</b>
      </button>
      <div className="group-container">
        <div className="username-parent">
          <div className="username">Cause of Death</div>
          
          <input className="group-child" type="text" value = {claims.cause_of_death} name="cause_of_death" onChange={handleInputs} />
        </div>
        <div className="nominee-name-parent">
          <div className="nominee-name">{`Date of Death `}</div>
          
          <input className="group-child" type="date" value = {claims.dod} name="dod" onChange={handleInputs} />
        </div>
        <div className="policy-id-parent">
          <div className="policy-id">Claim Amount</div>
          
          <input className="group-child" type="text" value = {claims.claim_amount} name="claim_amount" onChange={handleInputs} />
        </div>
        <div className="nominee-id-parent">
          <div className="nominee-id">{`Nominee ID `}</div>
          <input className="group-inner1" type="file" name="claims_proof" onChange={onFileChanges} value= {claims.claims_proof}  />
          
        </div>
        <div className="dob-parent">
          <div className="dob">Aadhar Number</div>
          
          <input className="group-inner1" type="file" name="aadhar_proof" onChange={onFileChange} value= {claims.aadhar_proof} />
        </div>
      </div>
      <div className="project-managment">
        <div className="term-life-insurance">Term Life Insurance</div>
        <img
          className="clan-family-group-peers-person-icon"
          alt=""
          src="/3289567-clan-family-group-peers-person-icon-1.svg"
        />
      </div>
      <div className="claim-details4">CLAIM DETAILS</div>
      </form>
    </div>
  );
};

export default Term;
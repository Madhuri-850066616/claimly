import { useCallback } from "react";
import { useNavigate, Link} from "react-router-dom";
import "./Medical.css";
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import Dropdown from './dropdown.js';
import axios from "axios";


const Medical = () => {

  const location = useLocation();
  const user = location.state.user;
  const navigate = useNavigate();
  const[claims,setUser] =useState({
    opd_number:"",
    hospital_name:"",
    department_name:"",
    doa:"",
    doctor_name:"",
    UHI_ID:"",
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


      console.log('test1',claims_proof)
      console.log('test2',aadhar_proof)

  const UpdateData=async(e)=>{
    e.preventDefault();
    console.log(e)
    const id= localStorage.getItem('claim_id')
    console.log("inside",id)
    const{opd_number,hospital_name,department_name,doa,doctor_name,UHI_ID,claim_amount}=claims;
    console.log("jjj",doa)
    const res = fetch(`https://random-jl1z.onrender.com/claims/image/${id}`,{
      method:"PUT",
      headers:{
        "content-Type":"application/json"
      },body:JSON.stringify({
        opd_number,hospital_name,department_name,doa,doctor_name,UHI_ID,claim_amount,claims_proof,aadhar_proof
      })

    });

    
    onClaimClick();
  }

  
  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconPersonClick = useCallback(() => {
    navigate("/user-page",{state: {user}});
  }, [navigate]);

  const onClaimClick = useCallback(() => {
    navigate("/general-details",{state: {user}});
  }, [navigate]);



  return (
    <div className="medical">
      <div className="footer">
        <img className="img-icon" alt="" src="/img.svg" />
        <img
          className="microsoftteams-image-1-2"
          alt=""
          src="/microsoftteamsimage-1-2@2x.png"
          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="contact-us-parent">
          <div className="contact-us">Contact US</div>
          <div className="email-claimlygmailcom">Email: claimly@gmail.com</div>
          <div className="ph-no-91">Ph No: +91 876543210</div>
        </div>
        <img className="footer-child" alt="" src="/frame-342.svg" />
      </div>
      <div className="step-3-container">
        <span>{`Step 3 - Enter `}</span>
        <span className="required-details">{`Required Details `}</span>
      </div>
      <div className="logo-parent">
        
      </div>
      <Dropdown/>
      <form method = "PUT">
      <button className="claim" onClick={UpdateData}>
        <button className="claim-child" />
        <b className="next">Next</b>
      </button>
      <div className="group-parent">
        <div className="opd-number-parent">
          <div className="opd-number">OPD Number</div>
          <input className="group-child" type="text" value = {claims.opd_number} name="opd_number" onChange={handleInputs} />
        </div>
        <div className="hospital-number-parent">
          <div className="hospital-name">Hospital Name</div>
          <input className="group-child" type="text" value = {claims.hospital_name} name="hospital_name" onChange={handleInputs} />
        </div>
        <div className="department-name-parent">
          <div className="department-name">Department Name</div>
          <input className="group-inner" type="text" value = {claims.department_name} name="department_name" onChange={handleInputs}/>
        </div>
        <div className="date-of-joining-parent">
          <div className="date-of-joining">Date of Joining</div>
          <input className="group-inner" type="date" value = {claims.doa} name="doa" onChange={handleInputs} />
        </div>
        <div className="aupload">
        <div className="vehicle-model1">Aadhar Document</div>
        <input className="group-inner1" type="file" name="aadhar_proof" onChange={onFileChange} value= {claims.aadhar_proof} />
      </div>
      <div className="bupload">
        <div className="vehicle-model1">Bill Document</div>
        <input className="group-inner1" type="file" name="claims_proof" onChange={onFileChanges} value= {claims.claims_proof}  />
      </div>
        <div className="bill-amount-parent">
          <div className="bill-amount">Bill Amount</div>
          <input className="group-child" type="text" value = {claims.claim_amount} name="claim_amount" onChange={handleInputs}/>
        </div>
        <div className="head-doctor-name-parent">
          <div className="head-doctor-name">Head Doctor Name</div>
          <input className="group-child2" type="text" value = {claims.doctor_name} name="doctor_name" onChange={handleInputs}/>
        </div>
      </div>
      <div className="claim-details">CLAIM DETAILS</div>
      <div className="interior-design">
        <div className="medical-insurance">Medical Insurance</div>
        <img
          className="health-healthcare-medical-icon"
          alt=""
          src="/6602703-health-healthcare-medical-icon-1.svg"
        />
      </div>
      <div className="uhi-id-parent">
        <div className="head-doctor-name">UHI ID</div>
        <input className="group-child2" type="text" value = {claims.UHI_ID} name="UHI_ID" onChange={handleInputs} />
      </div>
      </form>
    </div>
  );
};

export default Medical;
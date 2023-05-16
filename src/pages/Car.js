import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Car.css";
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import Dropdown from "./dropdown";
const Car = () => {
  const navigate = useNavigate();
  
  const location = useLocation();
  const user = location.state.user;
  const[claims,setUser] =useState({
    vehicle_number:"",
    chassis_number:"",
    vehicle_damage:"",
    fir_no:"",
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
    const{vehicle_number,chassis_number,vehicle_damage,fir_no,claim_amount}=claims;//cnst
   
    const res = fetch(`https://random-jl1z.onrender.com/claims/image/${id}`,{
      method:"PUT",
      headers:{
        "content-Type":"application/json"
      },body:JSON.stringify({
        vehicle_number,chassis_number,vehicle_damage,fir_no,claim_amount,aadhar_proof,claims_proof
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
    <div className="car">
      <div className="footer1">
        <img className="img-icon1" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-21"
          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="contact-us-group">
          <div className="contact-us1">Contact US</div>
          <div className="email-claimlygmailcom1">Email: claimly@gmail.com</div>
          <div className="ph-no-911">Ph No: +91 876543210</div>
        </div>
        <img className="footer-item" alt="" src="/frame-342.svg" />
      </div>
      <button className="header">
        <img
          className="logo-icon"
          alt=""
          src="/logo1@2x.png"
          onClick={onLogoImageClick}
        />
      </button>
      
      <Dropdown/>
      <form method = "PUT">
      <button className="claim" onClick={UpdateData}></button>
      <div className="claim-details1">CLAIM DETAILS</div>
      <div className="b3">
        <div className="license-branch">Vehicle Number</div>
        <input className="b3-child" type="text"  value = {claims.vehicle_number} name="vehicle_number" onChange={handleInputs}/>
      </div>
      <div className="b1">
        <div className="chassis-number">Chassis Number</div>
        <input className="b3-child" type="text"  value = {claims.chassis_number} name="chassis_number" onChange={handleInputs} />
      </div>
      <div className="b4">
        <div className="vehicle-number">Parts Damaged</div>
        <input className="b3-child" type="text"  value = {claims.vehicle_damage} name="vehicle_damage" onChange={handleInputs}/>
      </div>
      <div className="b2">
        <div className="vehicle-model">FIR Number</div>
        <input className="b3-child" type="text"  value = {claims.fir_no} name="fir_no" onChange={handleInputs} />
      </div>
      <div className="b5">
        <div className="vehicle-model2">Claim Amount</div>
        <input className="b3-child" type="text"  value = {claims.claim_amount} name="claim_amount" onChange={handleInputs}/>
      </div>
      <div className="b200">
        <div className="vehicle-model1">Aadhar document</div>
        <input className="b31-child" type="file"  value = {claims.aadhar_proof} name="aadhar_proof" onChange={onFileChange}/>
      </div>
      <div className="b201">
        <div className="vehicle-model1">Damaged vehicle image</div>
        <input className="b31-child" type="file"  value = {claims.claims_proof} name="claims_proof" onChange={onFileChanges} />
      </div>
      <div className="step-3-container1">
        <span>{`Step 3 - Enter `}</span>
        <span className="required-details1">Required Details</span>
      </div>
      <button className="claim1" onClick={UpdateData}>
        <button className="claim-item" />
        <b className="next1">Next</b>
      </button>
      <div className="space-planing">
        <div className="car-insurance">Car Insurance</div>
        <img
          className="car-directions-icon-1"
          alt=""
          src="/352315-car-directions-icon-1.svg"
        />
      </div>
      </form>
    </div>
  );
};

export default Car;
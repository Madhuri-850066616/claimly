import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Bike.css";
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import Dropdown from './dropdown.js';
const Bike = () => {

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
    const{vehicle_number,chassis_number,vehicle_damage,fir_no,claim_amount}=claims;
    const res = fetch(`/claims/image/${id}`,{
      method:"PUT",
      headers:{
        "content-Type":"application/json"
      },body:JSON.stringify({
        vehicle_number,chassis_number,vehicle_damage,fir_no,claim_amount,claims_proof,aadhar_proof
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
    navigate("/user-page", {state: {user}});
  }, [navigate]);

  const onClaimClick = useCallback(() => {
    navigate("/general-details", {state: {user}});
  }, [navigate]);

  return (
    <div className="bike">
      <div className="footer2">
        <img className="img-icon2" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-22"
          onClick={onMicrosoftTeamsImage12Click}
        />
        
        <div className="contact-us-container">
          <div className="contact-us2">Contact US</div>
          <div className="email-claimlygmailcom2">Email: claimly@gmail.com</div>
          <div className="ph-no-912">Ph No: +91 876543210</div>
        </div>
        <img className="footer-inner" alt="" src="/frame-342.svg" />
      </div>
      <button className="header1">
        <button className="logo1" onClick={onLogoClick} />
      </button>
      <div className="claim-details2">CLAIM DETAILS</div>
      <div className="bank-details">
        <div className="b22">
          <div className="chassis-number1">Chassis Number</div>
          <input className="b2-inner" type="text" />
        </div>
        <div className="b11">
          <div className="license-number">Damaged Parts</div>
          <input className="b2-inner" type="text" />
        </div>
        <div className="b31">
          <div className="bank-branch">Bank Branch</div>
          <input className="b2-inner" type="text" />
        </div>
        <div className="b41">
          <div className="ifsc-code">IFSC Code</div>
          <input className="b2-inner" type="text" />
        </div>
      </div>
      
      <div className="decorotive-services">
        <div className="bike-insurance">
          <p className="bike-insurance1">Bike Insurance</p>
        </div>
        <img
          className="and-bike-cross-moto-motorcycle-icon"
          alt=""
          src="/6646608-and-bike-cross-moto-motorcycle-icon-1.svg"
        />
      </div>
      <Dropdown/>
      <form method = "PUT">
      <div className="claim-details3">CLAIM DETAILS</div>
      <div className="b32">
        <div className="license-branch1">Vehicle Number</div>
        <input className="b3-inner" type="text" value = {claims.vehicle_number} name="vehicle_number" onChange={handleInputs}/>
      </div>
      <div className="b12">
        <div className="chassis-number2">Chassis Number</div>
        <input className="b3-inner" type="text" value = {claims.chassis_number} name="chassis_number" onChange={handleInputs}/>
      </div>
      <div className="b42">
        <div className="ifsc-code">Parts Damaged</div>
        <input className="b3-inner" type="text"  value = {claims.vehicle_damage} name="vehicle_damage" onChange={handleInputs}/>
      </div>
      <div className="b23">
        <div className="vehicle-model1">FIR Number</div>
        <input className="b3-inner" type="text"  value = {claims.fir_number} name="fir_number" onChange={handleInputs}/>
      </div>
      <div className="b29">
        <div className="vehicle-model1">Claim Amount</div>
        <input className="b3-inner" type="text"  value = {claims.claim_amount} name="claim_amount" onChange={handleInputs}/>
      </div>
      <div className="b24">
        <div className="vehicle-model1">Aadhar document</div>
        <input className="fileupload" type="file"  name="aadhar_proof" onChange={onFileChange} value= {claims.aadhar_proof} />
      </div>

      <div className="b25">
        <div className="vehicle-model1">Damaged vehicle image</div>
        <input className="fileupload" type="file"  name="claims_proof"  onChange={onFileChanges} value= {claims.claims_proof}/>
      </div>
    
      <div className="step-3-container2">
        <span>{`Step 3 - Enter `}</span>
        <span className="required-details2">Required Details</span>
      </div>
      <button className="claim2" onClick={UpdateData}>
        <button className="claim-inner" />
        <b className="next2">Next</b>
      </button>
      </form>
    </div>
  );
};

export default Bike;
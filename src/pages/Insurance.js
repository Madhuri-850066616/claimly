import { useCallback } from "react";
import { useNavigate, Link} from "react-router-dom";
import "./Insurance.css";
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import Dropdown from './dropdown.js';
const Insurance = () => {
  const location = useLocation();
  const user = location.state.user;
  const [selectedInsurance, setSelectedInsurance] = useState("");

  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconPersonClick = useCallback(() => {
    navigate("/user-page", { state: { user }});
  }, [navigate]);

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);


  const handleInsurance = async (insurancetype) => {
    const id = localStorage.getItem('claim_id')
    console.log(id)
    const res = await fetch(`https://random-jl1z.onrender.com/claims/${id}`,{
      method:'PUT',
      headers:{
        "content-Type":"application/json"
      },
      body: JSON.stringify({
        insurance_type: insurancetype,
      }),  
    })
    setSelectedInsurance(insurancetype);
    if (insurancetype === "Medical") {
      navigate("/medical", {state: {user}});
    } else if (insurancetype === "Bike") {
      navigate("/bike", {state: {user}});
    } else if (insurancetype === "Car") {
      navigate("/car", {state: {user}});
    } else if (insurancetype === "Term Life") {
      navigate("/term", {state: {user}});
    }
  }

  return (
    
    <div className="insurance">
      <button className="header2" />
      <div className="group-div">
        <img
          className="logo-icon3"
          alt=""
          src="/logo2@3x.png"
          onClick={onLogoImageClick}
        />
       <Dropdown/>
      </div>
      <div className="step-2-choose">Step 2- Choose Your Insurance</div>
      <div className="icons">
        <div
          className="interior-design1"
          onClick={() => handleInsurance("Medical")}
        >
          <div className="medical1">
            <p className="medical2">{`Medical `}</p>
          </div>
          <img
            className="health-healthcare-medical-icon1"
            alt=""
            src="/6602703-health-healthcare-medical-icon-11.svg"
          />
        </div>
       
        <button
          className="decorotive-services1"
          onClick={() => handleInsurance("Bike")}
        >
          <div className="bike1">
            <p className="medical2">{`Bike `}</p>
          </div>
          <img
            className="and-bike-cross-moto-motorcycle-icon1"
            alt=""
            src="/6646608-and-bike-cross-moto-motorcycle-icon-11.svg"
          />
        </button>
        <button className="space-planing1" onClick={() => handleInsurance("Car")}>
          <img className="car-icon" alt="" src="/car.svg" />
          <img
            className="car-directions-icon-11"
            alt=""
            src="/352315-car-directions-icon-11.svg"
          />
        </button>
        <button className="project-managment1" onClick={() => handleInsurance("Term Life")}>
          <div className="term-life">
            <p className="medical2">Term Life</p>
          </div>
          <img
            className="clan-family-group-peers-person-icon1"
            alt=""
            src="/3289567-clan-family-group-peers-person-icon-11.svg"
          />
        </button>
      </div>
      <div className="img-parent">
        <img className="img-icon5" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-25"

          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="contact-us-parent2">
          <div className="contact-us5">Contact US</div>
          <div className="email-claimlygmailcom5">Email: claimly@gmail.com</div>
          <div className="ph-no-915">Ph No: +91 876543210</div>
        </div>
        <img className="group-child15" alt="" src="/frame-3423.svg" />
      </div>
    </div>
  );
};

export default Insurance;
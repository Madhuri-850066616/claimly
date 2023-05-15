import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";
import React,{useState} from 'react';
// import {Link} from "react-router-dom;"


const SignUp = () => {
  const [user,setUser] = useState({
    name:"",password:"",dob:"",email_id:"",phone_no:""
  });
  let name,value;
  const handleInputs = (e)=>{
    //console.log(e);
    name =e.target.name;
    value =e.target.value;
    
    setUser({...user,[name]:value})

  }

  const PostData = async(e)=>{
    e.preventDefault();

    if(user.password==user.confirm_password){
         
      if(user.name!="" && user.dob!="")
      {
    
    if(validateEmail(user.email_id)==true)
    {
      if(user.phone_no.length!=10)
      {
        alert("please enter correct phone number")
      }
      else {
      alert("signup sucessful")
      const{name,password,dob,email_id,phone_no} =user;
      const res = fetch("/users/user",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,password,dob,email_id,phone_no
        }),
        
      });
      onContinueClick();}
    }
    else
    {
      alert("please enter valid email")
    }
     }
    else{
      alert("Please enter username or Date of birth")
    }
  }
    else{
      alert("please enter correct password")
    }
  
   
  }
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    // Please sync "landing page" to the project
  }, []);

  const onMicrosoftTeamsImage121Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContinueClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);


  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
       return (true)
     }
       
       return (false)
   }

  return (
    
    <div className="sign-up">
      <div className="signup">
        <b className="sign-up1">Sign Up</b>
      </div>
      <button
        className="microsoftteams-image-1-2-wrapper"
        onClick={onFrameButtonClick}
      >
        <img
          className="microsoftteams-image-1-28"
          alt=""
          src="/microsoftteamsimage-1-21@2x.png"
          onClick={onMicrosoftTeamsImage12Click}
        />
      </button>
      <form method ="POST">
      <input className="name" type="text" value ={user.name} name="name" onChange = {handleInputs} placeholder="Name" id="name"  />
      <input className="dob1" type="date" name="dob" value ={user.dob} onChange = {handleInputs}  placeholder="Date of birth" />
      <input className="email" type="text" value ={user.email_id} name="email_id" onChange = {handleInputs}  placeholder="Email" id="email" />
      <input className="phone-no" type="int" value ={user.phone_no} name="phone_no"onChange = {handleInputs}  placeholder="Phone Number" id="phone_no"/>
      <input className="password" type="password" value ={user.password} name="password" onChange = {handleInputs}  placeholder="Password" id="password" />
      <input className="confirm-password" type="password" value ={user.confirm_password} name="confirm_password" onChange = {handleInputs}  placeholder="Confirm Password" id="confirm_password" />
    
       <button className="continue" onClick={ PostData} >
        <div className="submit">Submit </div>     
      </button>
    
      </form>
      <div className="fixed-rectangle">
        
      

      {/* <div className="img-parent1">
       */}
      
        <button
          className="microsoftteams-image-1-29"
          onClick={onMicrosoftTeamsImage121Click}
        />
        
       
        <div className="contact-us-parent5">
          <div className="contact-us8">Contact US</div>
          <div className="email-claimlygmailcom8">Email: claimly@gmail.com</div>
          <div className="ph-no-918">Ph No: +91 876543210</div>
  
        </div>
        </div>
      
      <img className="group-child18" alt="" src="/frame-3425.svg" />
      
      </div>
  );
 
};

export default SignUp;

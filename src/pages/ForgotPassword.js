import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import React,{useState} from 'react';
function showToast(message, type) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(type);
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3001);
}
const ForgotPassword = () => {
  const [user,setUser] = useState({
    otp:"",password:""
  });
  let name,value;
  const handleInputs = (e)=>{
    name =e.target.name;
    value =e.target.value;
    setUser({...user,[name]:value})

  }

  const PostData = async(e)=>{
    e.preventDefault();
    if(user.password === user.confirm_password && user.otp !== ""){
      const{otp,password} =user;
      const res = await fetch("/forgotpassword/forgotpasswords",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          otp,password
        }),
      });
      if(res.status === 201){
        showToast("Password reset successful","success");
        onContinueClick();
      }
      else if(res.status === 401){
        showToast("Wrong otp","error");
      }
      else if(res.status === 404 || res.status === 403){
        showToast("Sorry not found","error");
      }
    }
    else{
      showToast("Passwords do not match or OTP is empty, check again!","error");
    }
  };
  


  const navigate = useNavigate();

  const onContinueClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    // Please sync "landing page" to the project
  }, []);

  const onMicrosoftTeamsImage121Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="forgot-password">
      <form method ="POST">
      <input className="email1" type="password" value ={user.password} name="password" onChange = {handleInputs} placeholder="New Password" id="password" />
      <input className="email3" type="password" value ={user.confirm_password} name="confirm_password" onChange = {handleInputs} placeholder="Confirm Password" id="confirm_password"/>
      <input className="email2" type="text" value={user.otp} name="otp" onChange = {handleInputs} placeholder="Enter OTP" id="otp" />
      <div className="ui-essential-app-avatar-profil1" />
      <button className="continue1" onClick={PostData}>
        <div className="confirm">Confirm</div>
      </button>
      </form>
      <div className="login1">
        <b className="forget-password">Forgot Password?</b>
      </div>
      <div
        className="microsoftteams-image-1-2-container"
        onClick={onFrameContainerClick}
      >
        <button
          className="microsoftteams-image-1-210"
          onClick={onMicrosoftTeamsImage12Click}
        />
      </div>
      <div className="img-parent2">
        <img className="img-icon9" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-211"
          onClick={onMicrosoftTeamsImage121Click}
        />
        <div className="contact-us-parent6">
          <div className="contact-us9">Contact US</div>
          <div className="email-claimlygmailcom9">Email: claimly@gmail.com</div>
          <div className="ph-no-919">Ph No: +91 876543210</div>
        </div>
        <img className="group-child19" alt="" src="/frame-3426.svg" />
      </div>
    </div>
  );
};

export default ForgotPassword;
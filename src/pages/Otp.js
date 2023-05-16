import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Otp.css";
import React,{useState} from "react";
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

const Otp = () => {
  const [user,setUser] = useState({
    email_id:""
});
  let name,value;
  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }
  const PostData = async(e)=>{

    if(user.email_id!="" ){
    
    e.preventDefault();
    const{email_id} = user;
    const res = fetch("https://random-jl1z.onrender.com/otp/otps",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
        email_id
      }),
      

    }).then((response)=>{
      if(response.status==404)
      {
        showToast("Sorry not found","error");
        
      }
      else 
      {
        onContinueClick();
        showToast("OTP sent","success");
     
      }
    })}
    else{
      showToast("Invalid Credentials","error")
    }  
  }

  const navigate = useNavigate();

  const onContinueClick = useCallback(() => {
    navigate("/forgot-password");
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
    <div className="otp">
      <div className="otp-child" />
      <form method="POST">
      <input className="email4" type="text" placeholder="Email address" value={user.email_id} name="email_id" onChange={handleInputs} id="email"/>
      <div className="ui-essential-app-avatar-profil2" />
      <button className="continue2" onClick={PostData}>
        <div className="send-otp" >Send OTP</div>
      </button>
      </form>
      <div className="login2">
        <b className="forget-password1">Forget Password?</b>
      </div>
      <div
        className="microsoftteams-image-1-2-frame"
        onClick={onFrameContainerClick}
      >
        <button
          className="microsoftteams-image-1-212"
          onClick={onMicrosoftTeamsImage12Click}
        />
      </div>
      <div className="img-parent3">
        <img className="img-icon10" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-213"
          onClick={onMicrosoftTeamsImage121Click}
        />
        <div className="contact-us-parent7">
          <div className="contact-us10">Contact US</div>
          <div className="email-claimlygmailcom10">
            Email: claimly@gmail.com
          </div>
          <div className="ph-no-9110">Ph No: +91 876543210</div>
        </div>
        <img className="group-child20" alt="" src="/frame-3426.svg" />
      </div>
    </div>
  );
};

export default Otp;

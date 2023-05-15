import { useCallback } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Login.css";
import React,{useState} from 'react';

const Login = () => {
  const [user,setUser] = useState({
    email_id:"",password:""
});
  let name,value;
  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }
  

  const PostData = async(e)=>{

    if(user.email_id!="" && user.password!=""){
    
    e.preventDefault();
    const{email_id,password} = user;
    const res = fetch("login/log",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },

      body:JSON.stringify({
        email_id,password
      }),
      
     

    }).then((response)=>{
      if(!response.ok)
      { 
        throw new Error('Failed to log in')
      }
      return response.json()
    })
      .then(data => {
        const {user, token} = data
        console.log('Logged in successfully:', user)
        alert("login succesful")
        console.log('Token:', token)
        // You can store the user and token in local storage or state to use throughout your app
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        navigate("/user-page")


      })
      .catch(error => {
        alert("login error")
        //console.error(error)
      })
       
    }

  
    
  }



  const navigate = useNavigate();

  const onContinueClick = useCallback(() => {
    navigate("/user-page",{ state: { user } });
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/otp");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    // Please sync "landing page" to the project
  }, []);

  const onMicrosoftTeamsImage121Click = useCallback(() => {
    navigate("/");
  }, [navigate]);


  return (
    <div className="login3">
      <div className="login-child" />
      <form method ="POST">
      <input className="email5" type="text" value={user.email_id} name="email_id" onChange={handleInputs} placeholder="Email address" id="email" required="true"/>
      <input className="password1" type="password" value={user.password} name="password" onChange={handleInputs}  placeholder="Password" id="password" required="true"/>
      <div className="ui-essential-app-avatar-profil3" />
      <button className="continue3" onClick={PostData}>
        <div className="continue4">Login</div>
      </button>
      </form>
      <div className="login4">
        <div className="dont-have-an-container">
          <b>Login</b>
          <span>{` `}</span>
        </div>
      </div>
      <button className="forgot-password-wrapper">
        <div className="forgot-password1" onClick={onForgotPasswordTextClick}>
          Forgot password?
        </div>
      </button>
      <div className="dont-have-an-account-parent">
        <div className="dont-have-an-container">
          <span>Don’t have an account?</span>
          <span className="span">{` `}</span>
        </div>
        <button className="sign-up2" onClick={onSignUpClick}>
          Sign Up
        </button>
      </div>
      <button className="frame-button" onClick={onFrameButton1Click}>
        <button
          className="microsoftteams-image-1-214"
          onClick={onMicrosoftTeamsImage12Click}
        />
      </button>
      <div className="fixed-rectangle">
        <img className="img-icon11" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-215"
          onClick={onMicrosoftTeamsImage121Click}
        />
        <div className="contact-us-parent8">
          <div className="contact-us11">Contact US</div>
          <div className="email-claimlygmailcom11">
            Email: claimly@gmail.com
          </div>
          <div className="ph-no-9111">Ph No: +91 876543210</div>
        </div>
        <img className="group-child21" alt="" src="/frame-3426.svg" />
      </div>
    </div>
  );
};

export default Login;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
const ForgotPassword = () => {
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
      <input className="email1" type="text" placeholder="New Password" />
      <input className="email2" type="text" placeholder="Enter OTP" />
      <input className="email3" type="text" placeholder="Confirm Password" />
      <div className="ui-essential-app-avatar-profil1" />
      <button className="continue1" onClick={onContinueClick}>
        <div className="confirm">Confirm</div>
      </button>
      <div className="login1">
        <b className="forget-password">Forget Password?</b>
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

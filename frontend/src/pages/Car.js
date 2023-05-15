import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Car.css";
const Car = () => {
  const navigate = useNavigate();

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconPersonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  const onClaimClick = useCallback(() => {
    navigate("/general-details");
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
      <button className="icon-person1" onClick={onIconPersonClick}>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </button>
      <div className="claim-details1">CLAIM DETAILS</div>
      <div className="b3">
        <div className="license-branch">License Branch</div>
        <input className="b3-child" type="text" />
      </div>
      <div className="b1">
        <div className="chassis-number">Chassis Number</div>
        <input className="b3-child" type="text" />
      </div>
      <div className="b4">
        <div className="vehicle-number">Vehicle Number</div>
        <input className="b3-child" type="text" />
      </div>
      <div className="b2">
        <div className="vehicle-model">Vehicle Model</div>
        <input className="b3-child" type="text" />
      </div>
      <div className="b21">
        <div className="vehicle-model">FIR Number</div>
        <input className="b3-child" type="text" />
      </div>
      <div className="step-3-container1">
        <span>{`Step 3 - Enter `}</span>
        <span className="required-details1">Required Details</span>
      </div>
      <button className="claim1" onClick={onClaimClick}>
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
    </div>
  );
};

export default Car;

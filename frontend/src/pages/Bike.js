import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Bike.css";
const Bike = () => {
  const navigate = useNavigate();

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconPersonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  const onClaimClick = useCallback(() => {
    navigate("/general-details");
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
          <div className="license-number">License Number</div>
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
      <button className="icon-person2" onClick={onIconPersonClick}>
        <img className="vector-icon2" alt="" src="/vector2.svg" />
      </button>
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
      <div className="claim-details3">CLAIM DETAILS</div>
      <div className="b32">
        <div className="license-branch1">License Branch</div>
        <input className="b3-inner" type="text" />
      </div>
      <div className="b12">
        <div className="chassis-number2">Chassis Number</div>
        <input className="b3-inner" type="text" />
      </div>
      <div className="b42">
        <div className="ifsc-code">Vehicle Number</div>
        <input className="b3-inner" type="text" />
      </div>
      <div className="b23">
        <div className="vehicle-model1">Vehicle Model</div>
        <input className="b3-inner" type="text" />
      </div>
      <div className="b24">
        <div className="vehicle-model1">FIR Number</div>
        <input className="b3-inner" type="text" />
      </div>
      <div className="step-3-container2">
        <span>{`Step 3 - Enter `}</span>
        <span className="required-details2">Required Details</span>
      </div>
      <button className="claim2" onClick={onClaimClick}>
        <button className="claim-inner" />
        <b className="next2">Next</b>
      </button>
    </div>
  );
};

export default Bike;

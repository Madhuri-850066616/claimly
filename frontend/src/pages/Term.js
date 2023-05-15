import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Term.css";
const Term = () => {
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
    <div className="term">
      <div className="footer3">
        <img className="img-icon3" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-23"
          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="frame-div">
          <div className="contact-us3">Contact US</div>
          <div className="email-claimlygmailcom3">Email: claimly@gmail.com</div>
          <div className="ph-no-913">Ph No: +91 876543210</div>
        </div>
        <img className="frame-icon" alt="" src="/frame-3421.svg" />
      </div>
      <div className="step-3-container3">
        <span>{`Step 3 - Enter `}</span>
        <span className="required-details3">{`Required Details `}</span>
      </div>
      <div className="logo-group">
        <img
          className="logo-icon1"
          alt=""
          src="/logo@3x.png"
          onClick={onLogoImageClick}
        />
        <button className="icon-person3" onClick={onIconPersonClick}>
          <img className="vector-icon3" alt="" src="/vector3.svg" />
        </button>
      </div>
      <button className="claim3" onClick={onClaimClick}>
        <button className="rectangle-button" />
        <b className="next3">Next</b>
      </button>
      <div className="group-container">
        <div className="username-parent">
          <div className="username">Username</div>
          <input className="group-child4" type="text" />
        </div>
        <div className="nominee-name-parent">
          <div className="nominee-name">{`Nominee Name `}</div>
          <input className="group-child4" type="text" />
        </div>
        <div className="policy-id-parent">
          <div className="policy-id">Policy ID</div>
          <input className="group-child6" type="text" />
        </div>
        <div className="nominee-id-parent">
          <div className="nominee-id">{`Nominee ID `}</div>
          <input className="group-child6" type="text" />
        </div>
        <div className="dob-parent">
          <div className="dob">DOB</div>
          <input className="group-child4" type="text" />
        </div>
        <div className="aadhar-number-parent">
          <div className="aadhar-number">Aadhar Number</div>
          <input className="group-child9" type="text" />
        </div>
      </div>
      <div className="project-managment">
        <div className="term-life-insurance">Term LIfe Insurance</div>
        <img
          className="clan-family-group-peers-person-icon"
          alt=""
          src="/3289567-clan-family-group-peers-person-icon-1.svg"
        />
      </div>
      <div className="claim-details4">CLAIM DETAILS</div>
    </div>
  );
};

export default Term;

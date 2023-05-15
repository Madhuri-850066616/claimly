import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Insurance.css";
const Insurance = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconPersonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  const onInteriorDesignContainerClick = useCallback(() => {
    navigate("/medical");
  }, [navigate]);

  const onDecorotiveServicesClick = useCallback(() => {
    navigate("/bike");
  }, [navigate]);

  const onSpacePlaningClick = useCallback(() => {
    navigate("/car");
  }, [navigate]);

  const onProjectManagmentClick = useCallback(() => {
    navigate("/term");
  }, [navigate]);

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
        <button className="icon-person5" onClick={onIconPersonClick}>
          <img className="vector-icon5" alt="" src="/vector5.svg" />
        </button>
      </div>
      <div className="step-2-choose">Step 2- Choose Your Insurance</div>
      <div className="icons">
        <div
          className="interior-design1"
          onClick={onInteriorDesignContainerClick}
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
          onClick={onDecorotiveServicesClick}
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
        <button className="space-planing1" onClick={onSpacePlaningClick}>
          <img className="car-icon" alt="" src="/car.svg" />
          <img
            className="car-directions-icon-11"
            alt=""
            src="/352315-car-directions-icon-11.svg"
          />
        </button>
        <button
          className="project-managment1"
          onClick={onProjectManagmentClick}
        >
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

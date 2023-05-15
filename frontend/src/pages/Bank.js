import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Bank.css";
const Bank = () => {
  const navigate = useNavigate();

  const onHeaderClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconPersonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  const onImgClick = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onImg1Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onImg2Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onImg3Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onImg4Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onImg5Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onImg6Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onImg7Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onMicrosoftTeamsImage12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="bank">
      <button className="header3" onClick={onHeaderClick}>
        <img className="logo-icon4" alt="" src="/logo2@3x.png" />
      </button>
      <button className="icon-person6" onClick={onIconPersonClick}>
        <img className="vector-icon6" alt="" src="/vector6.svg" />
      </button>
      <div className="photo">
        <button className="img" onClick={onImgClick} />
        <button className="img1" onClick={onImg1Click} />
        <button className="img2" onClick={onImg2Click} />
        <button className="img3" onClick={onImg3Click} />
        <button className="img4" onClick={onImg4Click} />
        <button className="img5" onClick={onImg5Click} />
        <button className="img6" onClick={onImg6Click} />
        <button className="img7" onClick={onImg7Click} />
        <div className="sib">{`SIB `}</div>
        <div className="indian-overseas">{`Indian Overseas `}</div>
        <div className="canara">{`Canara `}</div>
        <div className="kotak-mahindra">{`Kotak Mahindra `}</div>
        <div className="bank-of-baroda">{`Bank of Baroda `}</div>
        <div className="hdfc">HDFC</div>
        <div className="sbi">{`SBI `}</div>
        <div className="icici">{`ICICI `}</div>
      </div>
      <div className="step-1-choose-container">
        <span>{`Step 1- Choose Your `}</span>
        <span className="respective-bank">Respective Bank</span>
      </div>
      <div className="img-group">
        <img className="img-icon6" alt="" src="/img.svg" />
        <button
          className="microsoftteams-image-1-26"
          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="contact-us-parent3">
          <div className="contact-us6">Contact US</div>
          <div className="email-claimlygmailcom6">Email: claimly@gmail.com</div>
          <div className="ph-no-916">Ph No: +91 876543210</div>
        </div>
        <img className="group-child16" alt="" src="/frame-3423.svg" />
      </div>
    </div>
  );
};

export default Bank;

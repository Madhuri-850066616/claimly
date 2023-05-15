
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { useCallback } from "react";
const LandingPage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='container1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWhyUs1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="div1">
        <div className="child" />
        <img className="img-3620-1-icon" alt="" src="/img-3620-1@2x.png" />
        <b className="claimly">
          <span className="c">C</span>laimly
        </b>
        <div className="claims-made-easier">Claims made easier</div>
      </div>
      <div className="div2" data-scroll-to="container">
        <div className="basic">
          <div className="no-more-traditional">
            No more traditional form filling process, your claiming is now
            quicker through our website.
          </div>
          <div className="super-simple-claims">Super- Simple Claims</div>
          <img className="bg-icon" alt="" src="/bg@2x.png" />
          <div className="basic-child" />
        </div>
        <div className="premium">
          <div className="our-customer-safety">
            Our customer safety is our priority, we dont sell your data. You are
            in safe hands with us
          </div>
          <div className="secured-claims">Secured Claims</div>
          <img className="bg-icon1" alt="" src="/bg1@2x.png" />
          <div className="premium-child" />
        </div>
        <div className="standart">
          <div className="our-customers-who">
            Our customers who have availed the insurance benefits under various
            policies safely and quickly
          </div>
          <div className="customer-friendly">{`Customer Friendly `}</div>
          <img className="bg-icon2" alt="" src="/bg2@2x.png" />
          <div className="standart-child" />
        </div>
        <div className="why-us-container">
          <span>{`Why `}</span>
          <span className="us">Us ?</span>
          <span></span>
        </div>
      </div>
      <div className="div3" data-scroll-to="container1">
        <div className="about-us">
          <span>{`About `}</span>
          <span className="us">Us</span>
        </div>
        <div className="claimly-began-its-container">
          <p className="claimly-began-its">{`Claimly began its operations in the fiscal year 2021. On a retail weighted received premium basis (RWRP). `}</p>
          <p className="claimly-began-its">
            At Claimly, we operate on the core philosophy of
            customer-centricity. We offer long-term savings and protection
            products to meet the different life stage requirements of our
            customers. We have developed and implemented various initiatives to
            provide superior quality services and a hassle-free claim settlement
            experience to our customers.
          </p>
          <p className="claimly-began-its"></p>
        </div>
      </div>
      <div className="header5">
        <div className="right-text">
          <div className="rectangle-parent" onClick={onGroupContainerClick}>
            <button className="group-child22" />
            <div className="login6">Login</div>
          </div>
          <div className="rectangle-group">
            <button
              className="group-child22"
              onClick={onRectangleButton1Click}
            />
            <div className="sign-up3">Sign Up</div>
          </div>
        </div>
        <div className="left-text">
          <button className="about-us1" onClick={onAboutUsClick}>
            About Us
          </button>
          <button className="contact-us12" onClick={onContactUsClick}>
            Contact Us
          </button>
          <button className="why-us" onClick={onWhyUs1Click}>
            Why Us?
          </button>
        </div>
        <div className="microsoftteams-image-1-1-wrapper">
          <button className="microsoftteams-image-1-1" />
        </div>
      </div>
      <div className="div4">
        <div className="our-services">
          <p className="claimly-began-its">
            <span className="our">{`Our `}</span>
            <span>Services</span>
          </p>
        </div>
        <div className="icons1">
          <div className="interior-design2">
            <div className="medical-insurance1">
              <p className="claimly-began-its">{`Medical `}</p>
              <p className="claimly-began-its">Insurance</p>
            </div>
            <img
              className="health-healthcare-medical-icon2"
              alt=""
              src="/6602703-health-healthcare-medical-icon-12.svg"
            />
          </div>
          <div className="decorotive-services2">
            <div className="bike-insurance2">
              <p className="claimly-began-its">{`Bike `}</p>
              <p className="claimly-began-its">Insurance</p>
            </div>
            <img
              className="and-bike-cross-moto-motorcycle-icon2"
              alt=""
              src="/6646608-and-bike-cross-moto-motorcycle-icon-12.svg"
            />
          </div>
          <div className="space-planing2">
            <div className="car-insurance1">
              <p className="claimly-began-its">Car</p>
              <p className="claimly-began-its">Insurance</p>
            </div>
            <img
              className="car-directions-icon-12"
              alt=""
              src="/352315-car-directions-icon-12.svg"
            />
          </div>
          <div className="project-managment2">
            <div className="term-life-insurance-container">
              <p className="claimly-began-its">Term Life</p>
              <p className="claimly-began-its">Insurance</p>
            </div>
            <img
              className="clan-family-group-peers-person-icon2"
              alt=""
              src="/3289567-clan-family-group-peers-person-icon-12.svg"
            />
          </div>
        </div>
        <button className="button" onClick={onButtonClick}>
          <div className="button-child" />
          <div className="claim5">Claim</div>
        </button>
      </div>
      <div className="div5">
        <div className="bg" />
        <div className="our-partnered-banks-container">
          <span>{`Our `}</span>
          <span className="us">Partnered Banks</span>
          <span></span>
        </div>
        <div className="photo1">
          <img className="img-icon12" alt="" src="/img9@2x.png" />
          <img className="img-icon13" alt="" src="/img10@2x.png" />
          <img className="img-icon14" alt="" src="/img11@2x.png" />
          <img className="img-icon15" alt="" src="/img12@2x.png" />
          <img className="img-icon16" alt="" src="/img13@2x.png" />
          <img className="img-icon17" alt="" src="/img14@2x.png" />
          <img className="img-icon18" alt="" src="/img15@2x.png" />
          <img className="img-icon19" alt="" src="/img16@2x.png" />
          <div className="sib1">{`SIB `}</div>
          <div className="indian-overseas1">{`Indian Overseas `}</div>
          <div className="canara1">{`Canara `}</div>
          <div className="kotak-mahindra1">{`Kotak Mahindra `}</div>
          <div className="bank-of-baroda1">{`Bank of Baroda `}</div>
          <div className="hdfc1">HDFC</div>
          <div className="sbi1">{`SBI `}</div>
          <div className="icici1">{`ICICI `}</div>
        </div>
      </div>
      <div className="footer5" data-scroll-to="footerContainer">
        <div className="microsoftteams-image-1-2-parent">
          <img
            className="microsoftteams-image-1-216"
            alt=""
            src="/microsoftteamsimage-1-22@2x.png"
          />
          <div className="we-are-a">
            We are a customer friendly service here to make your claims easy,
            secured and fast!
          </div>
          <img className="frame-item" alt="" src="/frame-370.svg" />
        </div>
        <div className="contact-us-parent9">
          <div className="contact-us13">Contact US</div>
          <div className="address-parent">
            <div className="address">Address</div>
            <div className="enquero-global-a-container">
              <p className="claimly-began-its">
                <span className="e">E</span>
                <span>{`nquero Global- A genpact company, `}</span>
              </p>
              <p className="claimly-began-its">Bangalore</p>
            </div>
          </div>
          <div className="email-parent">
            <div className="email6">Email</div>
            <div className="claimlygmailcom">claimly@gmail.com</div>
          </div>
          <div className="phone-parent">
            <div className="phone">Phone</div>
            <div className="div6">1234567890</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Medical from "./pages/Medical";
import Car from "./pages/Car";
import Bike from "./pages/Bike";
import Term from "./pages/Term";
import GeneralDetails from "./pages/GeneralDetails";
import Insurance from "./pages/Insurance";
import Bank from "./pages/Bank";
import UserPage from "./pages/UserPage";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./pages/Otp";
import Login from "./pages/Login";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/medical":
        title = "";
        metaDescription = "";
        break;
      case "/car":
        title = "";
        metaDescription = "";
        break;
      case "/bike":
        title = "";
        metaDescription = "";
        break;
      case "/term":
        title = "";
        metaDescription = "";
        break;
      case "/general-details":
        title = "";
        metaDescription = "";
        break;
      case "/insurance":
        title = "";
        metaDescription = "";
        break;
      case "/bank":
        title = "";
        metaDescription = "";
        break;
      case "/user-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/otp":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/medical" element={<Medical />} />
      <Route path="/car" element={<Car />} />
      <Route path="/bike" element={<Bike />} />
      <Route path="/term" element={<Term />} />
      <Route path="/general-details" element={<GeneralDetails />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;

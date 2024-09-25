import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/authPages/Login/Login";
import RegisterPage from "../pages/authPages/Register/Register";  
import HomePage from "../pages/Home/HomePage";
import ForgotPassword from "../pages/authPages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/authPages/ForgotPassword/ResetPassword/ResetPassword";
import Blog from "../pages/Blog/Blog";
import Product from "../pages/Product/Product";

export default function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  )
}

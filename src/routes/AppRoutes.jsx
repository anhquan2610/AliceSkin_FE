import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/authPages/Login/Login";
import RegisterPage from "../pages/authPages/Register/Register";
import HomePage from "../pages/Home/HomePage";
import ForgotPassword from "../pages/authPages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/authPages/ForgotPassword/ResetPassword/ResetPassword";
import Blog from "../pages/Blog/Blog";
import Product from "../pages/Product/Product";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import { DefaultLayout } from "../layout/DefaultLayout";
import InformationUser from "../pages/InformationUser/InformationUser";
import CreateBlog from "../pages/CreateBlog/CreateBlog";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/password/reset" element={<ResetPassword />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="infor-user/" element={<InformationUser />} />
        <Route path="AddBlog/" element={<CreateBlog />} />
      </Route>
    </Routes>
  );
}

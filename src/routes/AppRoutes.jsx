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
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import Cart from "../pages/Cart/Cart";
import UserProtectedRoute from "../components/UserProtectedRoute/UserProtectedRoute";
import AdminProtectedRoute from "../components/AdminProtectedRoute/AdminProtectedRoute";
import AdminHome from "../pages/managementPages/AdminHome";
import ManagementLayout from "../layout/ManagementLayout/ManagementLayout";
import ProductManage from "../pages/managementPages/ProductManage/ProductManage";
import UserManage from "../pages/managementPages/UserManage/UserManage";
import BlogManage from "../pages/managementPages/BlogManage/BlogManage";
import BlogDetailManage from "../pages/managementPages/BlogManage/BlogDetailManage/BlogDetailManage";
import UpdateProduct from "../pages/managementPages/ProductManage/UpdateProduct/UpdateProduct";
import BrandManage from "../pages/managementPages/BrandManage/BrandManage";
import BrandDetail from "../pages/managementPages/BrandManage/BrandDetail/BrandDetail";
import AddProduct from "../pages/managementPages/ProductManage/AddProduct.jsx/AddProduct";
import Survey from "../pages/Survey/Survey";
import SurveyQuestion from "../pages/Survey/SurveyQuestion/SurveyQuestion";
import RecommendItem from "../pages/Survey/RecommendItem/RecommendItem";
import UpdateSurvey from "../pages/Survey/UpdateSurvey/UpdateSurvey";
import QuestionManage from "../pages/managementPages/QuestionManage/QuestionManage";
import ShippingManage from "../pages/managementPages/ShippingManage/ShippingManage";
import VoucherManage from "../pages/managementPages/VoucherManage/VoucherManage";

import ProdfileUser from "../pages/managementPages/ProfileUser/ProfileUser";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/password/reset" element={<ResetPassword />} />
      <Route
        path="manage/"
        element={
          <AdminProtectedRoute>
            <ManagementLayout />
          </AdminProtectedRoute>
        }
      >
        <Route path="admin" element={<AdminHome />} />
        <Route path="products" element={<ProductManage />} />
        <Route path="products/add_new" element={<AddProduct />} />
        <Route path="products/update/:id" element={<UpdateProduct />} />
        <Route path="brands" element={<BrandManage />} />
        <Route path="brands/:id" element={<BrandDetail />} />
        <Route path="users" element={<UserManage />} />
        <Route path="blogs" element={<BlogManage />} />
        <Route path="blogs/:id" element={<BlogDetailManage />} />
        <Route path="questions" element={<QuestionManage />} />
        <Route path="shippings" element={<ShippingManage />} />
        <Route path="vouchers" element={<VoucherManage />} />
        <Route path="infoUser" element={<ProdfileUser />} />
      </Route>
      <Route
        path="/"
        element={
          <UserProtectedRoute>
            <DefaultLayout />
          </UserProtectedRoute>
        }
      >
        <Route path="home" element={<HomePage />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="user_info" element={<InformationUser />} />
        <Route path="Add_Blog" element={<CreateBlog />} />
        <Route path="Update_Blog/:id" element={<UpdateBlog />} />
        <Route path="Shopping_Cart" element={<Cart />} />
        <Route path="Survey" element={<Survey />} />
        <Route path="Survey/Question" element={<SurveyQuestion />} />
        <Route path="Survey/Update" element={<UpdateSurvey />} />
        <Route path="RecommendItem" element={<RecommendItem />} />
      </Route>
    </Routes>
  );
}

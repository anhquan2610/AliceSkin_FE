import React, { useState } from "react";
import * as S from "./Navbar.styled";
import Logo from "../../assets/images/Logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Menu, MenuItem, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { notifySuccess } from "../../utils/Nontification.utils";
import { resetSurveyState } from "../../store/surveySlice";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sử dụng useSelector để lấy danh sách blogs từ Redux state
  const blogs = useSelector((state) => state.blog.blogs);

  // Hàm chọn ngẫu nhiên một blog_id từ blogs
  const getRandomBlogId = () => {
    if (blogs.length === 0) return "39"; // Giá trị mặc định nếu không có blog
    const randomIndex = Math.floor(Math.random() * blogs.length);
    return blogs[randomIndex].blog_id;
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetSurveyState());
    notifySuccess("Logout successfully");
    navigate("/login");
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Container>
      <S.Group>
        <S.Logo>
          <S.ImageLogo src={Logo} />
        </S.Logo>
        <S.NameWeb>Alice Skin</S.NameWeb>
      </S.Group>

      <S.NavList>
        <S.StyledLink to="/home">
          <S.NavItem>Home</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to={`/blog/${getRandomBlogId()}`}>
          <S.NavItem>Blog</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/product">
          <S.NavItem>Products</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/brand">
          <S.NavItem>Brands</S.NavItem>
        </S.StyledLink>
      </S.NavList>

      <S.HamburgerIcon onClick={toggleMenu}>
        <i className={`bi ${isMenuOpen ? "bi-list" : "bi-list"}`} />
      </S.HamburgerIcon>

      <S.MobileMenu className={isMenuOpen ? "open" : ""}>
        <S.CloseMenuButton onClick={toggleMenu}>
          <i className="bi bi-x" />
        </S.CloseMenuButton>
        <S.StyledLink to="/home" onClick={toggleMenu}>
          <S.NavItem>Home</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to={`/blog/${getRandomBlogId()}`} onClick={toggleMenu}>
          <S.NavItem>Blog</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/product" onClick={toggleMenu}>
          <S.NavItem>Products</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/brand" onClick={toggleMenu}>
          <S.NavItem>Brands</S.NavItem>
        </S.StyledLink>
      </S.MobileMenu>

      <S.Group2>
        <S.StyledLink to="/Shopping_Cart">
          <S.ShoppingCart>
            <Badge>
              <i className="bi bi-bag" />
            </Badge>
          </S.ShoppingCart>
        </S.StyledLink>
        <S.Profile onClick={handleUserClick}>
          <i className="bi bi-person" />
        </S.Profile>
      </S.Group2>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <S.StyledLink to="/user_info">
          <MenuItem onClick={handleCloseMenu}>My Information</MenuItem>
        </S.StyledLink>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </S.Container>
  );
}

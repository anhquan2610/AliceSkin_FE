import * as S from "./Navbar.styled";
import Logo from "../../assets/images/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Menu, MenuItem, Badge } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { notifySuccess } from "../../utils/Nontification.utils";
import { resetSurveyState } from "../../store/surveySlice";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setIsMenuOpen(!isMenuOpen); // Đóng/mở menu hamburger
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
        <S.StyledLink to="/blog/39">
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
        <S.CloseMenuButton onClick={toggleMenu} >
          <i className="bi bi-x" />
        </S.CloseMenuButton>
        <S.StyledLink to="/home">
          <S.NavItem>Home</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/blog/39">
          <S.NavItem>Blog</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/product">
          <S.NavItem>Products</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/brand">
          <S.NavItem>Brands</S.NavItem>
        </S.StyledLink>
      </S.MobileMenu>

      <S.Group>
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
      </S.Group>

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

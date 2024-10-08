import * as S from "./Navbar.styled";
import Logo from "../../assets/images/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const handlUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
        <S.StyledLink to="/blog/1">
          <S.NavItem>Blog</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/product">
          <S.NavItem>Products</S.NavItem>
        </S.StyledLink>
        <S.NavItem>Brands</S.NavItem>
        <S.NavItem>Collection</S.NavItem>
        <S.NavItem>Contact</S.NavItem>
      </S.NavList>
      <S.Group>
        <S.ShoppingCart>
          <i className="bi bi-bag" />
        </S.ShoppingCart>
        <S.Profile onClick={handlUserClick}>
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
        <S.StyledLink to="/infor-user">
          <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
        </S.StyledLink>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </S.Container>
  );
}

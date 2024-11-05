import * as S from "./Navbar.styled";
import Logo from "../../assets/images/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Menu, MenuItem, Badge } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { notifySuccess } from "../../utils/Nontification.utils";
import { resetSurveyState } from "../../store/surveySlice";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetSurveyState());
    notifySuccess("Đăng xuất thành công");
    navigate("/login");
  };

  const handleUserClick = (e) => {
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
          <S.NavItem>Trang Chủ</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/blog/1">
          <S.NavItem>Blog</S.NavItem>
        </S.StyledLink>
        <S.StyledLink to="/product">
          <S.NavItem>Sản Phẩm</S.NavItem>
        </S.StyledLink>
        <S.NavItem>Thương Hiệu</S.NavItem>
        <S.NavItem>Bộ Sưu Tập</S.NavItem>
        <S.NavItem>Liên Hệ</S.NavItem>
      </S.NavList>
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
          <MenuItem onClick={handleCloseMenu}>Tài Khoản Của Tôi</MenuItem>
        </S.StyledLink>
        <MenuItem onClick={handleLogout}>Đăng Xuất</MenuItem>
      </Menu>
    </S.Container>
  );
}

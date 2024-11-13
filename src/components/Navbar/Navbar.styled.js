import styled from "styled-components";
import { Link as link } from "react-router-dom";
import { DEVICES } from "../../config/responsiveUi";

export const Container = styled.div`
  padding: var(--s-4) var(--s-8);
  background-color: var(--gray-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-4) var(--s-20);
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: var(--s-2);
  @media (max-width: 1200px) {
    order: 2;
    display: flex;
    align-items: center;
  }
`;
export const Group2 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--s-2);
  @media (max-width: 1200px) {
    order: 2;
    
  }
`;

export const Logo = styled.div``;

export const ImageLogo = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  @media ${DEVICES.DESKTOP} {
    display: unset;
  }
`;

export const NameWeb = styled.div`
  margin-left: var(--s-3);
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-lg);
  }
`;

export const NavList = styled.div`
  display: none;
  @media ${DEVICES.DESKTOP} {
    display: flex;
    gap: var(--s-5);
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    color: var(--gray);
  }
    font-size: var(--fs-lg);
    padding: var(--s-2);
  @media ${DEVICES.DESKTOP} {
    padding: 0;
  }
`;

export const ShoppingCart = styled.div`
  font-size: var(--fs-xl);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-2xl);
  }
`;

export const Profile = styled.div`
   font-size: var(--fs-2xl);
  @media ${DEVICES.DESKTOP} {
    font-size: var(--fs-3xl);
  }
`;

export const StyledLink = styled(link)`
  text-decoration: none;
  color: var(--black);
`;

export const HamburgerIcon = styled.div`
  font-size: var(--fs-3xl);

  @media ${DEVICES.DESKTOP} {
    display: none;
  }

  @media (max-width: 1200px) {
    order: 1;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: -250px;
  width: 180px;
  height: 100%;
  background-color: var(--ice-blue);
  padding: var(--s-3);
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-4);
  z-index: 1000;

  @media (min-width: 1200px) {
    display: none;
  }

  &.open {
    left: 0;
  }
`;

export const CloseMenuButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: var(--fs-2xl);
  cursor: pointer;
  color: var(--black);
  &:hover {
    color: var(--gray);
  }
`;

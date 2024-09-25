import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const Container = styled.div`
padding: var(--s-4) var(--s-20);
background-color: var(--gray-2);
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Group = styled.div`
display: flex;
align-items: center;

`;

export const Logo = styled.div``;

export const ImageLogo = styled.img`
width: 30px;
height: 30px;
`;

export const NameWeb = styled.div`
margin-left: var(--s-3);
font-weight: var(--fw-semibold);
`;

export const NavList = styled.div`
display: flex;
gap: var(--s-5);
`;

export const NavItem = styled.div`
cursor: pointer;
&:hover {
    color: var(--gray);
}
`;

export const ShoppingCart = styled.div`
font-size: var(--fs-2xl);
`;

export const Profile = styled.div`
font-size: var(--fs-3xl);
margin-left: var(--s-3);
`;

export const StyledLink = styled(link)`
text-decoration: none;
color: var(--black);
`;
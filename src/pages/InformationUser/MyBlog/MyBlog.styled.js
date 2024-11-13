import styled, { keyframes } from "styled-components";
import { DEVICES } from '../../../config/responsiveUi';

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const HeaderContainer = styled.div`
display: flex;
margin-bottom: var(--s-3);
text-align: center;
`;

export const Title = styled.div`
font-size: var(--fs-sm);
background-color: var(--green);
flex: 2;
color: var(--white);
padding: var(--s-3) var(--s-2);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
}
`;

export const Divider = styled.div`
border-bottom: 4px solid var(--green);
flex: 10;
`;


export const SearchContainer = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-3);
align-items: center;
margin-bottom: var(--s-3);
`;

export const ContainerFilter = styled.div`
flex: 2;
`;

export const SearchInput = styled.input`
border: 2px solid var(--gray);
padding: var(--s-2) var(--s-3);
border-radius: var(--br-lg);
width: 100%;
`;

export const ContainerGroup = styled.div`
flex: 6;
display: flex;
justify-content: center;
`;

export const BtnCreateBlog = styled.button`
background-color: var(--green);
color: var(--white);
padding: var(--s-2) var(--s-3);
cursor: pointer;
display: flex;

align-items: center;
gap: var(--s-1);
border-radius: var(--br-md);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease; 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: var(--white); 
    transition: left 0.4s ease;
    z-index: -1;
  }
  &:hover::before {
    left: 0;
  }
  &:hover {
    color: var(--green);
    border: 1px solid var(--green);
  }
`;

export const ItemBlogContainer = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-3);
`;

export const Message = styled.div`
display: flex;
justify-content: center;
color: var(--gray);
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  border: 8px solid var(--gray);
  border-top: 8px solid var(--green);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.5s linear infinite;
  margin: 0 auto;
  `;


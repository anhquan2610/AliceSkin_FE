import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
padding: var(--s-3) var(--s-10);
@media ${DEVICES.DESKTOP} {
  padding: var(--s-5) var(--s-30);
}
`;

export const TopContainer = styled.div`
display: flex;
justify-content: center;
`;

export const Title = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-bold);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-lg);
}
`;

export const MiddleContainer = styled.div`

`;

export const RecommnedItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
width: 100%;
gap: var(--s-1);
margin: var(--s-6) 0;
@media ${DEVICES.TABLET} {
  display: flex;
flex-direction: row;
justify-content: center;
gap: var(--s-10);
}
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;

export const ButtonAllProduct = styled.button`
padding: var(--s-3) var(--s-12);
  background-color: var(--green);
  font-size: var(--fs-sm);
  color: var(--white);
  border-radius: var(--br-sm);
  border: 1px solid var(--green);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease; 
  @media ${DEVICES.TABLET} {
    padding: var(--s-4) var(--s-25);
    font-size: var(--fs-md);
  }
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

export const NoProductText = styled.p`
  font-size: var(--fs-sm);
  font-style: italic;
  color: gray;
  text-align: center;
  width: 100%;
  margin-top: var(--s-5);
`;

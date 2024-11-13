import styled from "styled-components";
import { DEVICES } from '../../../config/responsiveUi';

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const ContainerHeader = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: var(--fs-xs);
  background-color: var(--green);
  flex: 2;
  color: var(--white);
  padding: var(--s-3) var(--s-2);
 
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
    font-weight: var(--fw-semibold);
  }
`;

export const Divider = styled.div`
  border-bottom: 4px solid var(--green);
  flex: 10;
`;

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-2);
align-items: center;
margin-top: var(--s-5);
height: 100%;
`;

export const Description = styled.div`
margin-top: var(--s-2);
font-size: var(--fs-sm);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-lg);
}
`;

export const Group = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);

`;

export const Icon = styled.div`
color: var(--green);
`;

export const Category = styled.div``;

export const Answer = styled.div``;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: var(--s-5);
gap: var(--s-2);
@media ${DEVICES.TABLET} {
  margin-top: var(--s-15);
}
`;

export const ButtonUpdate = styled.button`
padding: var(--s-3) var(--s-32);
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
    padding: var(--s-4) var(--s-32);
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

export const ButtonSeeRecommend = styled.button`
padding: var(--s-3) var(--s-17);
  background-color: var(--white);
  font-size: var(--fs-sm);
  border: 1px solid var(--green);
  color: var(--green);
  border-radius: var(--br-sm);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease; 
  @media ${DEVICES.TABLET} {
    padding: var(--s-4) var(--s-15);
    font-size: var(--fs-md);
  }


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: var(--green); 
    transition: left 0.4s ease;
    z-index: -1;
  }
  &:hover::before {
    left: 0;
  }
  &:hover {
    color: var(--white);
   border: 1px solid var(--green);
  }
`;
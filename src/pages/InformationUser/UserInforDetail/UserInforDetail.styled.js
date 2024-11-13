import styled, { keyframes } from "styled-components";
import { DEVICES } from '../../../config/responsiveUi';


export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const HeaderContainer = styled.div`
display: flex;
margin-bottom: var(--s-3);
@media ${DEVICES.TABLET} 
{
  margin-bottom: 0;
}
`;

export const Title = styled.div`
font-size: var(--fs-xs);
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

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
@media ${DEVICES.TABLET} {
  padding: var(--s-5) var(--s-40);
}
`;

export const Group = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: var(--s-1);
margin-bottom: var(--s-3);
`;

export const Label = styled.div`
font-size: var(--fs-sm);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-md);
}
`;

export const Input = styled.div`
border: 2px solid var(--gray);
width: 100%;
padding: var(--s-1);
border-radius: var(--br-md);
background-color: var(--light-gray-3);
color: var(--black);
@media ${DEVICES.TABLET} {
  padding: var(--s-2);
}
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

export const InforUpdate = styled.div`
font-size: var(--fs-sm);
font-style: italic;
color: var(--dảk-brown);
`;
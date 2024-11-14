import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

const slideInFromLeft = keyframes`
from {
  transform: translate(-100%, 100%);
}
to {
  transform: translate(0, 0);
}
`;

const slideInFromRight = keyframes`
0% {
  opacity: 0;
  transform: translateX(100%);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export const Container = styled.div`
  display: flex;
  
  
`;

export const ContainerLeft = styled.div`
flex: 2;
`;

export const ContainerMiddle = styled.div`
  display: flex;
  flex: 8;
  flex-direction: column;

  padding: var(--s-15) 0;
  @media ${DEVICES.PHONE_L}{
    padding: var(--s-5) 0;
    align-items: center;
  }
`;

export const ContainerRight = styled.div`
flex: 2;
`;

export const Title = styled.div`
font-size: var(--fs-3xl);
margin-bottom: var(--s-3);
font-weight: var(--fw-semibold);
@media ${DEVICES.PHONE_L}{
  font-size: var(--fs-4xl);
}
animation: ${slideInFromLeft} 1s ease-in-out;
`;

export const SubTitle = styled.div`
font-size: var(--fs-sm);
@media ${DEVICES.PHONE_L}{
  font-size: var(--fs-lg);
}
animation: ${slideInFromLeft} 1s ease-in-out;
`;

export const ContainerForm = styled.div`
margin-top: var(--s-5);
`;

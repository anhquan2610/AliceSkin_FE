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
  flex-direction: row;
  height: 100vh;
`;

export const ContainerForm = styled.div`
  padding: var(--s-20) var(--s-10);
  justify-content: center;
  flex: 6;
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-30) var(--s-30);
  }
  animation: ${slideInFromLeft} 1s ease-in-out;
`;

export const ContainerSpace = styled.div`
  flex: 1;
  display: none;
  @media ${DEVICES.DESKTOP} {
    display: unset;
  }
`;

export const ContainerImage = styled.div`
  flex: 5;
  display: none;
  animation: ${slideInFromRight} 1s ease-in-out;
  @media ${DEVICES.DESKTOP}{
    display: unset;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
`;

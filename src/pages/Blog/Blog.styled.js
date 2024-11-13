import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../config/responsiveUi";

export const Container = styled.div``;

export const ContainerOutlet = styled.div`
display: flex;
flex-direction: column;
padding: var(--s-3) var(--s-10);

height: auto;
@media ${DEVICES.DESKTOP}{
  padding: var(--s-5) var(--s-30);
  display: flex;
  flex-direction: row;
  gap: var(--s-10);
}
@media ${DEVICES.TABLET}{
  display: flex;
  flex-direction: row;
  gap: var(--s-10);
}
`;

export const LeftContainer = styled.div`
flex: 8;
`;

export const RightContainer = styled.div`
flex: 4;
`;


export const NoBlogsMessage = styled.div`
text-align: center;
width: 100%;
font-size: var(--fs-lg);
font-style: italic;
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
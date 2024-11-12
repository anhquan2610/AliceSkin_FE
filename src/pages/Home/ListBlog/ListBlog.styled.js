import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`

padding: var(--s-5) 0;
`;

export const TopContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`;

export const Title = styled.div`
font-weight: var(--fw-semibold);

`;

export const Filter =   styled.div``;

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: var(--s-2);
    @media ${DEVICES.PHONE_L} {
    padding: var(--s-4) 0;
    row-gap: var(--s-8);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 var(--s-4);
    gap: var(--s-2);
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
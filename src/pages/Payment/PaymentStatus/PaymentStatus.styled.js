import styled, { keyframes } from 'styled-components';
import { DEVICES } from '../../../config/responsiveUi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: var(--s-3) var(--s-10);
  @media ${DEVICES.TABLET} {
    padding: var(--s-10) var(--s-30);
  }
`;

export const ContainerImage = styled.div`
 
`;

export const Image = styled.img`
aspect-ratio: 1;
width: auto;
height: 200px;
object-fit: contain;
@media ${DEVICES.TABLET} {
  height: 300px;
}
`;



export const PaymentResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Text = styled.div`
 font-size: var(--fs-sm);
 text-align: center;
 font-weight: var(--fw-bold);
 @media ${DEVICES.TABLET} {
  font-size: var(--fs-lg);
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





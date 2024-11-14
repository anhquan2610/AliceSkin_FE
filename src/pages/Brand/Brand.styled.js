import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../config/responsiveUi";

export const Container = styled.div`
padding: var(--s-3) var(--s-10);
@media ${DEVICES.DESKTOP} {
  padding: var(--s-5) var(--s-30);
}
`;

export const Title = styled.div`
text-align: center;
font-size: var(--fs-lg);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-3);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-2xl);
  margin-bottom: var(--s-5);
}
`;

export const ListBrandContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: var(--s-2);
flex-wrap: wrap;
@media ${DEVICES.TABLET} {
  gap: var(--s-5);
}
`;

export const BrandItem = styled.div``;

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
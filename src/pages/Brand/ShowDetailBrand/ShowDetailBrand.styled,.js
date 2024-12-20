import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
padding: var(--s-3) var(--s-10);
@media ${DEVICES.DESKTOP} {
  padding: var(--s-5) var(--s-30);
}
`;

export const ImageContainer = styled.div`
margin-bottom: var(--s-5);
display: flex;
justify-content: center;

`;

export const Image = styled.img`
aspect-ratio: 16/9;
width: auto;
height: 150px;
object-fit: cover;
border-radius: var(--br-md);
@media ${DEVICES.TABLET} {
  width: auto;
height: 300px;
}
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-2);
font-size: var(--fs-md);
margin-bottom: var(--s-7);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-lg);
}
`;

export const ContentGroup = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-1);
`;

export const Title = styled.div`
font-weight: var(--fw-bold);
`;

export const Content = styled.div`
font-size: var(--fs-md);
`;

export const DeatailItemContainer = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-5);
`;

export const ItemContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
gap: var(--s-1);
@media ${DEVICES.TABLET} {
  display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: var(--s-5);
justify-content: flex-start;
}

`;

export const TitleItem = styled.div`
font-size: var(--fs-md);
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
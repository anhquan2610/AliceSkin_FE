import styled, { keyframes } from "styled-components";

export const Container = styled.div`
padding: var(--s-5) var(--s-30);
`;

export const ImageContainer = styled.div`
margin-bottom: var(--s-5);
display: flex;
justify-content: center;
`;

export const Image = styled.img`
aspect-ratio: 16/9;
width: auto;
height: 300px;
object-fit: cover;
border-radius: var(--br-md);
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-2);
font-size: var(--fs-lg);
margin-bottom: var(--s-7);
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
gap: var(--s-5);

`;

export const TitleItem = styled.div`
font-size: var(--fs-lg);
font-weight: var(--fw-bold);
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
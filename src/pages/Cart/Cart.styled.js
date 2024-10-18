import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: var(--s-5) var(--s-30);
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`;

export const Title = styled.div`
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
`;

export const TotalOnCart = styled.div``;

export const ListCartContainer = styled.div``;

export const TotalPrice = styled.div`
justify-content: center;
display: flex;
margin-bottom: var(--s-5);
font-size: var(--fs-xl);
font-weight: var(--fw-semibold);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnIcon = styled.div`
margin-left: var(--s-2);
`;

export const BtnCheckout = styled.button`
  padding: var(--s-4) var(--s-20);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--black-2);
  font-size: var(--fs-md);
  color: var(--white);
  border-radius: var(--fs-sm);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
  border: 1px solid var(--black-2);
  &::before {
    content: "";
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
    color: var(--black-2);
    border: 1px solid var(--black-2);
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

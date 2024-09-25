import styled from "styled-components";
import Landing from "../../assets/images/Landing.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${Landing});
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
`;

export const TitleWeb = styled.div`
  padding: var(--s-15) 0;
  color: var(--white);
  font-size: var(--fs-6xl);
  font-weight: var(--fw-semibold);
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

export const BtnLogin = styled.button`
  width: 100%;
  padding: var(--s-3) var(--s-30);
  border-radius: var(--br-md);
  font-size: var(--fs-lg);
  box-shadow: var(--shadow-1);
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray-2);
  }
`;

export const BtnRegister = styled.button`
  padding: var(--s-3) var(--s-30);
  font-size: var(--fs-lg);
  border-radius: var(--br-md);
  cursor: pointer;
  color: var(--white);
  box-shadow: var(--shadow-1);
  background-color: rgba(11, 10, 10, 0.9);
  &:hover {
    background-color: var(--black-opacity);
  }
`;

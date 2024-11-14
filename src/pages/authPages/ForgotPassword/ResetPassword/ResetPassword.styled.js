import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";

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
flex: 3;
`;

export const ContainerRight = styled.div`
flex: 3;
`;

export const ContainerMiddle = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--s-10) 0;
  gap: var(--s-3);
  flex: 6;

`;

export const Title = styled.div`
  font-size: var(--fs-3xl);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.TABLET}{
    font-size: var(--fs-4xl);
  }
  animation: ${slideInFromLeft} 1s ease-in-out;
`;

export const Description = styled.div`
  font-size: var(--fs-md);
  text-align: center;
  margin-bottom: var(--s-4);
  @media ${DEVICES.TABLET}{
    font-size: var(--fs-xl);
  }
  animation: ${slideInFromLeft} 1s ease-in-out;
`;

export const ContainerForm = styled.div`
  background-color: var(--light-gray-2);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--s-3) var(--s-15);
  gap: var(--s-2);
  border-radius: var(--br-md);
  box-shadow: var(--shadow-4);
  @media ${DEVICES.TABLET}{
    padding: var(--s-7) var(--s-15);
  }
  animation: ${slideInFromRight} 1s ease-in-out;
`;

export const Group = styled.div`
display: flex;
flex-direction: column;
`;

export const Label = styled.label`
  font-size: var(--fs-md);
  margin: var(--s-1) 0;
  font-weight: var(--fw-medium);
  @media ${DEVICES.TABLET}{
    font-size: var(--fs-lg);
  }
`;

export const Input = styled.input`
  padding: var(--s-2) var(--s-3);
  font-size: var(--fs-md);
  border-radius: var(--br-md);
  border: 2px solid var(--gray);
  background-color: var(--light-gray-2);
  border: 2px solid var(--white);
margin-bottom: var(--s-3);
  &:hover {
    background-color: var(--white);
    border: 2px solid var(--light-gray-2);
  }
`;

export const BtnUpdate = styled.button`
  border-radius: var(--br-md);
  padding: var(--s-2) 0;
  font-size: var(--fs-md);
  color: var(--white);
  cursor: pointer;
  background-color: var(--navy);
  box-shadow: var(--shadow-4);
  margin-bottom: var(--s-2);
`;

export const BtnCancel = styled.button`
  border-radius: var(--br-md);
  padding: var(--s-2) 0;
  font-size: var(--fs-md);
  cursor: pointer;
  box-shadow: var(--shadow-4);
`;

export const ErrorMessageStyled = styled.div`
  color: red; 
  font-size: var(--fs-sm); 
  margin-top: var(--s-2); 
`;

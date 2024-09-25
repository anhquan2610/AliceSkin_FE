import styled from "styled-components";

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
  font-size: var(--fs-4xl);
  font-weight: var(--fw-semibold);
`;

export const Description = styled.div`
  font-size: var(--fs-xl);
  margin-bottom: var(--s-4);
`;

export const ContainerForm = styled.div`
  background-color: var(--light-gray-2);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--s-7) var(--s-15);
  gap: var(--s-2);
  border-radius: var(--br-md);
  box-shadow: var(--shadow-3);
`;

export const Group = styled.div`
display: flex;
flex-direction: column;
`;

export const Label = styled.label`
  font-size: var(--fs-lg);
  margin: var(--s-1) 0;
  font-weight: var(--fw-medium);
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

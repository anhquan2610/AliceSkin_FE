import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
`;

export const Title = styled.div`
  font-size: var(--fs-5xl);
  font-weight: var(--fw-medium);
`;

export const Subtitle = styled.div`
  font-size: var(--fs-xl);
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
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
  &:hover {
    background-color: var(--light-gray-2);
  }
`;

export const ForgotPassword = styled.div`
  color: var(--blue);
  text-decoration: underline;
  display: flex;
  justify-content: flex-end;
  font-size: var(--fs-sm);
  cursor: pointer;
`;

export const BtnLogin = styled.button`
  width: 100%;
  background-color: var(--navy);
  color: var(--white);
  border-radius: var(--br-md);
  padding: var(--s-3) 0;
  font-size: var(--fs-md);
  cursor: pointer;
  &:hover {
    background-color: var(--navy-2);
  }
`;

export const BlankSpace = styled.div`
  border: 1px solid black;
  padding: 0 var(--s-20);
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BtnLoginFacebook = styled.button`
  color: var(--black);
  box-shadow: var(--shadow-1);
  padding: var(--s-2) var(--s-10);
  border-radius: var(--br-xl);
  font-size: var(--fs-md);
  &:hover {
    box-shadow: var(--shadow-6);
    cursor: pointer;
    border: none;
  }
`;

export const BtnLoginGoogle = styled.button`
  color: var(--black);
  box-shadow: var(--shadow-1);
  padding: var(--s-2) var(--s-10);
  border-radius: var(--br-xl);
  font-size: var(--fs-md);
  cursor: pointer;
  &:hover {
    box-shadow: var(--shadow-6);
    border: none;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red; 
  font-size: var(--fs-sm); 
   
`;
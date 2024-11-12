import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";

export const Container = styled.div`
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: var(--s-3);
  @media ${DEVICES.PHONE_L} {
    width: 49%;
    margin-bottom: var(--s-5);
  }
`;

export const Label = styled.label`
  font-size: var(--fs-md);
  margin: var(--s-1) 0;
  font-weight: var(--fw-medium);
  @media ${DEVICES.PHONE_L} {
    font-size: var(--fs-lg);
  }
`;

export const Input = styled.input`
  padding: var(--s-2) var(--s-2);
  font-size: var(--fs-md);
  border-radius: var(--br-md);
  border: 2px solid var(--gray);
  &:hover {
    background-color: var(--light-gray-2);
  }
`;

export const Select = styled.select`
  padding: var(--s-2) var(--s-2);
  font-size: var(--fs-md);
  border-radius: var(--br-md);
  border: 2px solid var(--gray);

  &:hover {
    background-color: var(--light-gray-2);
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-4);
  padding: 0 var(--s-40);
  width: 100%;
`;

export const BtnLogin = styled.button`
  background-color: var(--navy);
  color: var(--white);
  border-radius: var(--br-xl);
  padding: var(--s-3) 0;
  width: 100%;
  font-size: var(--fs-lg);
  cursor: pointer;
  &:hover {
    background-color: var(--navy-2);
  }
`;

export const BlankSpace = styled.div`
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
`;

export const BtnLoginFace = styled.button`
  background-color: var(--blue);
  color: var(--white);
  border-radius: var(--br-xl);
  padding: var(--s-3) 0;
  width: 100%;
  font-size: var(--fs-lg);
  cursor: pointer;
  &:hover {
    background-color: var(--navy-2);
  }
`;

export const BtnLoginGoogle = styled.button`
  background-color: var(--white);
  color: var(--black);
  border-radius: var(--br-xl);
  border: 2px solid var(--light-gray-2);
  padding: var(--s-3) 0;
  width: 100%;
  font-size: var(--fs-lg);
  cursor: pointer;
  &:hover {
    background-color: var(--light-gray-2);
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red; 
  font-size: var(--fs-sm); 
  margin-top: var(--s-2); 
`;

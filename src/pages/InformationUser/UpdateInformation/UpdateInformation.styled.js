import styled from "styled-components";



export const Container = styled.div`
display: flex;
flex-direction: column;

`;

export const HeaderContainer = styled.div`
display: flex;

`;

export const Title = styled.div`
font-size: var(--fs-lg);
font-weight: var(--fw-semibold);
background-color: var(--green);
flex: 2;
color: var(--white);
padding: var(--s-3) var(--s-2);
`;

export const Divider = styled.div`
border-bottom: 4px solid var(--green);
flex: 10;
`;

export const ContentContainer = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: var(--s-5) var(--s-40);
`;

export const Group = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: var(--s-1);
margin-bottom: var(--s-3);
`;

export const Label = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
`;

export const Input = styled.input`
border: 2px solid var(--gray);
width: 100%;
padding: var(--s-2);
border-radius: var(--br-md);
background-color: var(--light-gray-3);
color: var(--black);
font-size: var(--fs-md);
`;

export const Select = styled.select`
border: 2px solid var(--gray);
width: 100%;
padding: var(--s-2);
border-radius: var(--br-md);
background-color: var(--light-gray-3);
color: var(--black);
`;

export const Option = styled.option``;

export const ButtonSave = styled.button`
 background-color: var(--green);
  font-size: var(--fs-md);
  color: var(--white);
  border-radius: var(--br-md);
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: var(--s-3);
  transition: color 0.4s ease;
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
    color: var(--green);
    border: 1px solid var(--green);
  }
`
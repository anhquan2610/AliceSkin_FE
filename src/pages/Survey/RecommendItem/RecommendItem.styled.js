import styled from "styled-components";

export const Container = styled.div`
padding: var(--s-5) var(--s-30);
`;

export const TopContainer = styled.div`
display: flex;
justify-content: center;
`;

export const Title = styled.div`
font-size: var(--fs-lg);
font-weight: var(--fw-bold);
`;

export const MiddleContainer = styled.div`

`;

export const RecommnedItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
width: 100%;
gap: var(--s-10);
margin: var(--s-6) 0;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;

export const ButtonAllProduct = styled.button`
padding: var(--s-4) var(--s-25);
  background-color: var(--green);
  font-size: var(--fs-md);
  color: var(--white);
  border-radius: var(--br-sm);
  border: 1px solid var(--green);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease; 
  
  &::before {
    content: '';
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
`;

export const NoProductText = styled.p`
  font-size: var(--fs-sm);
  font-style: italic;
  color: gray;

  margin-top: var(--s-5);
`;

import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: var(--s-10) var(--s-30);
`;

export const ContainerImage = styled.div`
 
`;

export const Image = styled.img`
aspect-ratio: 1;
width: auto;
height: 300px;
object-fit: contain;
`;



export const PaymentResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Text = styled.div`
 font-size: var(--fs-lg);
 font-weight: var(--fw-bold);
`;





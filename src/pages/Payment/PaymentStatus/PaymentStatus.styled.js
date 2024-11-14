import styled from 'styled-components';
import { DEVICES } from '../../../config/responsiveUi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: var(--s-3) var(--s-10);
  @media ${DEVICES.TABLET} {
    padding: var(--s-10) var(--s-30);
  }
`;

export const ContainerImage = styled.div`
 
`;

export const Image = styled.img`
aspect-ratio: 1;
width: auto;
height: 200px;
object-fit: contain;
@media ${DEVICES.TABLET} {
  height: 300px;
}
`;



export const PaymentResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Text = styled.div`
 font-size: var(--fs-sm);
 text-align: center;
 font-weight: var(--fw-bold);
 @media ${DEVICES.TABLET} {
  font-size: var(--fs-lg);
 }
`;





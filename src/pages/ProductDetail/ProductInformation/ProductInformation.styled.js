import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const TopContainer = styled.div`
margin: var(--s-4) 0;
@media ${DEVICES.TABLET}{
  margin: var(--s-8) 0;
}
`;

export const NameProduct = styled.div`
font-size: var(--fs-xl);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET}{
  font-size: var(--fs-4xl);
}
`;

export const BottomContainer = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-5);
@media ${DEVICES.TABLET}{
  display: flex;
flex-direction: row;
}
`;

export const LeftContainer = styled.div`
flex: 6;
`;

export const ImageContainer = styled.div`

`;

export const ImageProduct = styled.img`
width: 100%;
height: 150px;
overflow: hidden;
aspect-ratio: 1;
object-fit: contain;
@media ${DEVICES.TABLET}{
  height: 100%;
  object-fit: cover;
}
`;

export const RightContainer = styled.div`
flex: 6;
display: flex;
flex-direction: column;
gap: var(--s-3);
`;

export const PriceProduct = styled.div`
display: flex;
flex-direction: row;

gap: var(--s-2);
align-items: baseline;
@media ${DEVICES.TABLET}{
  display: flex;
flex-direction: row;

}
`;

export const Price = styled.div`
text-decoration: line-through;
font-size: var(--fs-xs);
@media ${DEVICES.TABLET}{
  font-size: var(--fs-md);
}
`;

export const DiscountPrice = styled.div`
font-weight: var(--fw-semibold);
font-size: var(--fs-lg);
color: var(--red);
@media ${DEVICES.TABLET}{
  font-size: var(--fs-2xl);
}
`;

export const DiscountDescription = styled.div`
background-color: var(--light-gray-3);
padding: var(--s-1) var(--s-1);
color: var(--black);
border-radius: var(--br-md);
box-shadow: var(--shadow-3);
display: none;
@media ${DEVICES.TABLET}{
  padding: var(--s-2) var(--s-2);
  
}
`;

export const CapacityProduct = styled.div`
font-size: var(--fs-sm);
@media ${DEVICES.TABLET}{
  font-size: var(--fs-lg);
}
`;

export const StatusProduct = styled.div`
font-size: var(--fs-sm);
@media ${DEVICES.TABLET}{
  font-size: var(--fs-lg);
}
`;

export const QuantityProduct = styled.div`
font-size: var(--fs-sm);

@media ${DEVICES.TABLET}{
  font-size: var(--fs-lg);
}
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
align-items: center;
margin: var(--s-1) 0;
@media ${DEVICES.TABLET}{
  margin: var(--s-5) 0;
  gap: var(--s-10);
}

`;

export const BtnCount = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
border: 1px solid var(--green);
padding: var(--s-3) var(--s-2);
border-radius: var(--fs-sm);
@media ${DEVICES.TABLET}{
  padding: var(--s-4) var(--s-3);
}
`;

export const BtnDecrement = styled.button`
font-size: var(--fs-md);
cursor: pointer;
&:disabled {
    cursor: not-allowed;
    color: var(--gray);
}
@media ${DEVICES.TABLET}{
  font-size: var(--fs-lg);
}
`;

export const Count = styled.div`
font-size: var(--fs-md);
text-align: center;
width: 20px;
@media ${DEVICES.TABLET}{
  font-size: var(--fs-lg);
}
`;

export const BtnInCrement = styled.button`
font-size: var(--fs-md);
cursor: pointer;
@media ${DEVICES.TABLET}{
  font-size: var(--fs-lg);
}
`;


export const BtnBuy = styled.button`
  padding: var(--s-4) var(--s-25);
  background-color: var(--green);
  font-size: var(--fs-md);
  color: var(--white);
  border-radius: var(--fs-sm);
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



export const BtnAddToCart = styled.button`
  padding: var(--s-3) var(--s-15);
  background-color: var(--red);
  font-size: var(--fs-sm);
  color: var(--white);
  border-radius: var(--fs-sm);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease; 

  @media ${DEVICES.TABLET}{
    padding: var(--s-4) var(--s-15);
    font-size: var(--fs-md);
  }
  
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

export const GroupInformation = styled.div`
display: flex;
flex-direction: column;
@media ${DEVICES.TABLET}{
  margin-bottom: var(--s-4);
}
`;

export const Title = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-1);
`;

export const Content = styled.div`
font-size: var(--fs-md);
`;

export const TableDelivery = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: var(--s-2) 0;
  font-size: var(--fs-md);
  text-align: center;
`;

export const Th = styled.th`
  background-color: var(--green);
  color: white;
  padding: var(--s-2);
  border: 1px solid var(--white) ;
`;

export const Td = styled.td`
  padding: var(--s-3);
  border: 1px solid var(--green);
  text-align: center;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``; 

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
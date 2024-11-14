import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../config/responsiveUi";

export const Container = styled.div`
padding: var(--s-3) var(--s-10);
display: flex;
flex-direction: column;
gap: var(--s-5);
@media ${DEVICES.DESKTOP}{
  padding: var(--s-5) var(--s-30);
}
@media ${DEVICES.TABLET}{
  display: flex;
  flex-direction: row;
}
`;

export const PaymentContainer = styled.div`
order: 2;
@media ${DEVICES.TABLET}{
  flex: 6;
  order: 1;
}
`;

export const OrderContainer = styled.div`
order: 1;
@media ${DEVICES.TABLET}{
  flex: 6;
  order: 2;
}
`;

//LeftPayment
export const LeftContainer = styled.div`
display: flex;
flex-direction: column;

`;

export const MethodPaymentContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-bottom: var(--s-4);
@media ${DEVICES.TABLET}{
  margin-bottom: var(--s-7);
}
`;

export const Title = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET}{
  font-size: var(--fs-xl);
}
`;

export const PaymentMethod = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
margin-top: var(--s-2);
@media ${DEVICES.TABLET}{
  gap: var(--s-5);
  margin-top: var(--s-5);
}
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const ItemPaymentLabel = styled.label`
  cursor: pointer;
`;

export const ItemPaymentContainer = styled.div`
  text-align: center;
  box-shadow: var(--shadow-1);
  padding: var(--s-2) var(--s-5);
  border-radius: var(--br-lg);
  transition: all 0.3s ease;
  @media ${DEVICES.TABLET}{
    padding: var(--s-5) var(--s-10);
  }
  
  ${ItemPaymentLabel}:has(${HiddenRadio}:checked) & {
    border: 2px solid var(--primary-color); 
    box-shadow: var(--shadow-2);
  }
`;

export const PaymentName = styled.div`
font-size: var(--fs-sm);
`;

export const PaymentImageContainer = styled.div``;

export const PaymentImage = styled.img`
aspect-ratio: 1;
width: 100px;
height: 70px;
object-fit: contain;
`;

export const AddressContainer = styled.div`
margin-bottom: var(--s-10);
`;

export const InformationContaienr = styled.div`
padding: var(--s-5);
box-shadow: var(--shadow-4);
border-radius: var(--br-lg);
margin-top: var(--s-3);
`;

export const InformationGroup = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-2);
margin-bottom: var(--s-3);
`;

export const LabelInformation = styled.label``;

export const InputInformation = styled.input`
border: 1px solid var(--gray);
padding: var(--s-2) var(--s-2);
font-size: var(--fs-md);
border-radius: var(--br-sm);
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;

export const BtnOder = styled.button`
font-size: var(--fs-lg);
background-color: var(--black-2);
color: var(--white);
padding: var(--s-3) var(--s-20);
border-radius: var(--br-md);
cursor: pointer;

&:disabled {
  background-color: var(--gray);
  cursor: not-allowed;
}
`;

//RightPayment
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

export const SuperContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
  box-shadow: var(--shadow-4);
  padding: 0 var(--s-4);
  border-radius: var(--br-md);
  flex-direction: column;
`;

export const OderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--s-2);
  border-bottom: 1px solid var(--gray);
  margin-bottom: var(--s-4);
`;

export const OrderTitle = styled.div`
  text-align: center;
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--fs-md);
  color: var(--dark-gray);
`;

export const TextTop = styled.div``;

export const PriceTop = styled.div``;

export const ItemContainer = styled.div`
  padding: var(--s-2) var(--s-3);
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
`;

export const ShippingContainer = styled.div`
  margin-bottom: var(--s-4);
`;

export const GroupItemContainer = styled.div`
  display: flex;
  margin-top: var(--s-3);
  border-bottom: 1px solid var(--gray);
`;

export const IconImageContainer = styled.div`
  flex: 2;
`;

export const IconImage = styled.img`
  aspect-ratio: 1/1;
  height: 100%;
  width: 70px;
  object-fit: contain;
`;

export const ContentContaienr = styled.div`
  flex: 10;
  font-size: var(--fs-sm);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const VoucherContainer = styled.div`
  border-bottom: 1px solid var(--gray);
  margin-bottom: var(--s-4);
`;

export const SubTotalContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: var(--s-4);
font-size: var(--fs-lg);
color: var(--black);
font-weight: var(--fw-bold);
`;

export const TextSubTotal = styled.div``;

export const PriceSubTotal = styled.div``;

import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../config/responsiveUi"

export const Container = styled.div`
  padding: var(--s-3) var(--s-10);
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-5) var(--s-30);
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-2xl);
  }
`;

export const ContainerContent = styled.div`
  padding: var(--s-5) 0;
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-5) var(--s-40);
  }
`;

export const Content = styled.div`
  box-shadow: var(--shadow-4);
  padding: var(--s-2);
  border-radius: var(--br-md);
  @media ${DEVICES.TABLET} {
    padding: var(--s-5);
  }
`;

export const OrderItemContainer = styled.div`
  border-bottom: 1px solid var(--gray);
  padding: var(--s-1) 0;
  @media ${DEVICES.TABLET} {
    padding: var(--s-3);
  }
`;

export const TotalPrice = styled.div`
  font-size: var(--fs-md);
  margin-top: var(--s-2);
  font-weight: var(--fw-semibold);
  text-align: center;
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-lg);
  }
`;

export const DateOrder = styled.div`
font-size: var(--fs-xs);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-md);
}
`;

export const Status = styled.div`
  margin-bottom: var(--s-2);
  font-size: var(--fs-xs);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
    margin-bottom: var(--s-3);
  }
`;

export const AddressShipping = styled.div`
  margin: var(--s-1) 0;
  font-size: var(--fs-sm);
  font-style: italic;
  color: var(--dark-brown);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
    margin: var(--s-3) 0;
  }
`;

export const ShipPrice = styled.div`
  margin-bottom: var(--s-1);
  font-size: var(--fs-sm);
  font-style: italic;
  color: var(--dark-brown);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
  }
`;



export const VoucherPrice = styled.div`
  font-size: var(--fs-sm);
  font-style: italic;
  color: var(--dark-brown);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid var(--gray);
  font-size: var(--fs-md);
  font-style: italic;
  color: var(--dark-brown);
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    width: 50px;
    padding: 5px;
    font-size: 1.2rem;
    margin-left: 10px;
  }

  label {
    font-size: 1.2rem;
  }
`;

export const ReviewButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ReviewForm = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: var(--s-5) var(--s-30);
`;

export const Title = styled.div`
  text-align: center;
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
`;

export const ContainerContent = styled.div`
  padding: var(--s-5) var(--s-40);
`;

export const Content = styled.div`
  box-shadow: var(--shadow-4);
  padding: var(--s-5);
  border-radius: var(--br-md);
`;

export const OrderItemContainer = styled.div`
  padding: var(--s-5);
  border-bottom: 1px solid var(--gray);
`;

export const TotalPrice = styled.div`
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  text-align: center;
`;

export const DateOrder = styled.div``;

export const Status = styled.div`
  margin-bottom: var(--s-3);
`;

export const AddressShipping = styled.div`
  margin: var(--s-3) 0;
  font-size: var(--fs-md);

  font-style: italic;
  color: var(--dark-brown);
`;

export const ShipPrice = styled.div`

  margin-bottom: var(--s-3);
  font-size: var(--fs-md);
  font-style: italic;
  color: var(--dark-brown);
`;



export const VoucherPrice = styled.div`
  font-size: var(--fs-md);
  font-style: italic;
  color: var(--dark-brown);
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
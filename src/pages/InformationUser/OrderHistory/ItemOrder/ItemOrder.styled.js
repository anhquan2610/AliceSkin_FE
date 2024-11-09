import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
border-bottom: 2px solid var(--gray);
border-bottom-style: dashed;
margin-bottom: var(--s-2);
`;



export const ContainerContent = styled.div`
flex: 10;
display: flex;
flex-direction: column;
gap: var(--s-3);
margin-bottom: var(--s-3);
`;

export const DateOrder = styled.div``;

export const Group = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const TotalPrice = styled.div`
font-weight: var(--fw-semibold);
`;

export const ViewDetail = styled.div`
font-size: var(--fs-sm);
background-color: var(--green);
color: var(--white);
padding: var(--s-1) var(--s-2);
border-radius: var(--br-md);
`;

export const AddressShipping = styled.div``

export const ContainerStatus = styled.div`
flex: 2;
`;

export const StatusItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-weight: var(--fw-semibold);
font-size: var(--fs-sm);
`;
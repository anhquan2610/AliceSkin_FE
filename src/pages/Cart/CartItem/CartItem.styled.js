import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
margin: var(--s-5) 0;
padding: 0 var(--s-5);
border-bottom: 1px solid var(--gray);
border-bottom-style: dashed;
align-items: center;
`;

export const ImageContainer = styled.div`
flex: 2;

`;

export const ImageItem = styled.img`
aspect-ratio: 1/1;
height: 100%;
width: 100%;
object-fit: cover;
`;

export const NameContainer = styled.div`
flex: 5;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size: var(--fs-md);
`;

export const ItemName = styled.div``;

export const InforContainer = styled.div`
flex: 6;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: var(--s-2);
`;

export const QuantityContainer = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-3);
align-items: center;
border: 1px solid var(--black-2);
padding: var(--s-1) var(--s-2);
border-radius: var(--br-md);
`;

export const IconQuantityContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const BtnIncrement  = styled.button`
cursor: pointer;
`;

export const ItemQuantity = styled.div``;

export const BtnDecrement = styled.button`
cursor: pointer;
`;

export const ItemPrice = styled.div``;

export const IconDelete = styled.div``;
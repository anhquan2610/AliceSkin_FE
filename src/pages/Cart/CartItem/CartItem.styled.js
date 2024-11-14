import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-1);
margin: var(--s-5) 0;
border-bottom: 1px solid var(--gray);
border-bottom-style: dashed;
align-items: center;
@media ${DEVICES.TABLET}{
    padding: 0 var(--s-5);
    gap: var(--s-2);
}
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
font-size: var(--fs-xs);
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
@media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
}
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
gap: var(--s-1);
align-items: center;
border: 1px solid var(--black-2);
padding: var(--s-1);
border-radius: var(--br-md);
@media ${DEVICES.TABLET}{
    padding: var(--s-1) var(--s-2);
    gap: var(--s-3);
}
`;

export const IconQuantityContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const BtnIncrement  = styled.button`
cursor: pointer;
font-size: var(--fs-xs);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
}
`;

export const ItemQuantity = styled.div`
width: 15px;
`;

export const BtnDecrement = styled.button`
cursor: pointer;
font-size: var(--fs-xs);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
}
`;

export const ItemPrice = styled.div`
font-size: var(--fs-xs);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
}
`;

export const IconDelete = styled.div``;
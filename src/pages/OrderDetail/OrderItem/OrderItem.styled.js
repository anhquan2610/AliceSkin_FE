import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;

`;

export const ImageContainer = styled.div`
flex: 2;
`;

export const Image = styled.img`
aspect-ratio: 1/1;
  object-fit: contain;
  width: 100px;
  height: auto;
`;

export const ContentContainer = styled.div`
flex: 10;
display: flex;
flex-direction: column;
justify-content: center;
gap: var(--s-2);

`;


export const NameItem = styled.div``;

export const Group = styled.div`
display: flex;
justify-content: space-between;
`;

export const PriceItem = styled.div``;

export const QuantityItem = styled.div`
font-size: var(--fs-sm);
font-weight: var(--fw-semibold);
`;
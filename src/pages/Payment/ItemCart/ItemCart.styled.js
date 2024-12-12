import styled from "styled-components";

export const Container = styled.div`
display: flex;
`;

export const ContainerImage = styled.div`
flex: 3;
display: flex;
align-items: center;
justify-content: center;  
`;

export const ImageItem = styled.img`
aspect-ratio: 1/1;
height: auto;
width: 80px;
object-fit: cover;
border-radius: var(--br-md);

`;

export const ContainerInfo = styled.div`
flex: 9;
display: flex;
flex-direction: column;
font-size: var(--fs-sm);
gap: var(--s-2);
`;

export const NameItem = styled.div`
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CapacityItem = styled.div`
`;

export const Group = styled.div`
display: flex;
justify-content: space-between;
`;

export const PriceItem = styled.div``;

export const QuantityItem = styled.div``;
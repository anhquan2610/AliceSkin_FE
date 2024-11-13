import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

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
  width: 70px;
  height: auto;
  @media ${DEVICES.TABLET} {
    width: 100px;
  }
`;

export const ContentContainer = styled.div`
flex: 10;
display: flex;
flex-direction: column;
justify-content: center;
gap: var(--s-2);

`;


export const NameItem = styled.div`
font-size: var(--fs-xs);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-md);
}
`;

export const Group = styled.div`
display: flex;
justify-content: space-between;
`;

export const PriceItem = styled.div`
font-size: var(--fs-xs);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-md);
}
`;

export const QuantityItem = styled.div`
font-size: var(--fs-xs);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-sm);
}
`;
import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  box-shadow: var(--shadow-1);
  padding: var(--s-2);
  border-radius: var(--br-xl);
  &:hover {
    cursor: pointer;
    box-shadow: var(--shadow-2);
    transform: scale(1.05); 
  }
  @media ${DEVICES.TABLET} {
    width: 29%;
    padding: var(--s-4);
  }
`;

export const ContainerImage = styled.div`
  flex: 3;
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 75px;
  aspect-ratio: 1/1;
  object-fit: contain;
  border-radius: var(--br-lg);
  @media ${DEVICES.TABLET} {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  gap: var(--s-1);
  @media ${DEVICES.TABLET} {
    gap: var(--s-2);
  }
`;

export const HashtagProduct = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
`;

export const TypeProduct = styled.div`
  font-size: var(--fs-xs);
  color: var(--white);
  background-color: var(--green);
  padding: var(--s-1) var(--s-1);
  border-radius: var(--br-sm);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-sm);
    padding: var(--s-2) var(--s-4);
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${DEVICES.TABLET} {
    margin-bottom: var(--s-2);
  }
`;

export const RateStar = styled.div`
  flex-direction: row;
  display: flex;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-xs);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-sm);
  }
`;

export const Star = styled.div`
  font-size: var(--fs-sm);
  color: var(--yellow);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
  }
  
`;

export const RateNumber = styled.div`
  color: var(--green);
  font-size: var(--fs-sm);
  text-decoration: underline;
`;

export const ProductName = styled.div`
  font-weight: var(--fw-semibold);
  font-size: var(--fs-sm);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-lg);
  }
`;

export const Description = styled.div`
  font-size: var(--fs-xs);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${DEVICES.TABLET} {
    margin-bottom: var(--s-1);
  }
`;

export const PriceProduct = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-1);
align-items: baseline;
@media ${DEVICES.TABLET} {
  gap: var(--s-2);
}
`;

export const Price = styled.div`
text-decoration: line-through;
font-size: var(--fs-xxs);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-sm);
}

`;

export const DiscountPrice = styled.div`
font-weight: var(--fw-semibold);
font-size: var(--fs-xs);
color: var(--red);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-sm);
}
`;

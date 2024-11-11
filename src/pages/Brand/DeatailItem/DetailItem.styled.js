import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 19%;
  box-shadow: var(--shadow-1);
  padding: var(--s-4);
  border-radius: var(--br-xl);
  &:hover {
    cursor: pointer;
    box-shadow: var(--shadow-2);
    transform: scale(1.05); 
  }
`;

export const ContainerImage = styled.div`
  flex: 3;
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  border-radius: var(--br-lg);
`;

export const ContentContainer = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`;

export const HashtagProduct = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
`;

export const TypeProduct = styled.div`
font-size: var(--fs-sm);
  color: var(--white);
  background-color: var(--green);
  padding: var(--s-2) var(--s-4);
  border-radius: var(--br-sm);
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: var(--s-2);
`;

export const RateStar = styled.div`
  flex-direction: row;
  display: flex;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-sm);
`;

export const Star = styled.div`
  font-size: var(--fs-md);
  color: var(--yellow);
  
`;

export const RateNumber = styled.div`
  color: var(--green);
  font-size: var(--fs-sm);
  text-decoration: underline;
`;

export const ProductName = styled.div`
  font-weight: var(--fw-semibold);
  font-size: var(--fs-lg);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Description = styled.div`
  font-size: var(--fs-xs);
  margin-bottom: var(--s-1);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceProduct = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
align-items: baseline;
`;

export const Price = styled.div`
text-decoration: line-through;
font-size: var(--fs-sm);

`;

export const DiscountPrice = styled.div`
font-weight: var(--fw-semibold);
color: var(--red);
`;
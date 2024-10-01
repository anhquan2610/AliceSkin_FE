import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  width: 24%;
  gap: var(--s-4);
  box-shadow: var(--shadow-1);
  padding: var(--s-4);
  border-radius: var(--br-xl);
  overflow: hidden;
  &:hover {
    cursor: pointer;
    box-shadow: var(--shadow-2);
    transform: scale(1.05); 
  }
`;

export const ImageContainer = styled.div`
    flex: 3;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: var(--br-lg);
`;

export const ContentContainer = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`;

export const Type = styled.div`

`;

export const Title = styled.div`
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  margin: var(--s-2) 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Description = styled.div`
font-size: var(--fs-xs);
  width: 100%;
  margin-bottom: var(--s-1);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Infor = styled.div``;
import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  padding: var(--s-5) var(--s-30);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--s-3);
  font-style: italic;
  font-weight: var(--fw-bold);
`;

export const ContainerImage = styled.div``;

export const Image = styled.img`
  aspect-ratio: 1;
  width: auto;
  height: 400px;
  object-fit: contain;
`;

export const Text = styled.div`
  font-size: var(--fs-lg);
`;

export const Text2 = styled.div`
  font-size: var(--fs-lg);
`;

export const UrlLink = styled.a`
  
  color: var(--green);
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;

export const UrlContainer = styled.div`
  margin-top: var(--s-2);
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: var(--fs-sm);
`;

export const Text3 = styled.p`
  font-weight: bold;

`;

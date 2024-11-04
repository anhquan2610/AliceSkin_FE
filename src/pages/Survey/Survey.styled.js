import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--s-5) var(--s-30);
`;

export const Title = styled.div`
  font-size: var(--fs-3xl);
  color: var(--green);
  font-weight: var(--fw-semibold);
  margin: var(--s-5);
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  aspect-ratio: 1/1;
  width: auto;
  height: 100%;
  margin-bottom: var(--s-5);
  object-fit: cover;
`;

export const Text1 = styled.div`
  margin-bottom: var(--s-5);
  font-size: var(--fs-lg);
`;

export const Text2 = styled.div`
  margin-bottom: var(--s-5);
  font-size: var(--fs-lg);
`;

export const BtnTakeQuiz = styled.button`
  margin-bottom: var(--s-5);
  font-size: var(--fs-md);
  border: 2px solid var(--black);
  padding: var(--s-1) var(--s-20);
  cursor: pointer;
`;

export const Text3 = styled.div`
font-size: var(--fs-lg);
`;

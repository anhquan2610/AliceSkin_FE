import styled from "styled-components";

export const Container = styled.div``;

export const ContainerOutlet = styled.div`
display: flex;
flex-direction: column;
padding: var(--s-5) var(--s-30);
gap: var(--s-5);
height: auto;
`;

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: var(--s-5);
`;

export const Title = styled.div`
font-size: var(--fs-2xl);
font-weight: var(--fw-semibold);
`;

export const ProductContainer = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-5);
`;

export const LeftContainer = styled.div`
flex: 3;
display: flex;
flex-direction: column;
gap: var(--s-3);
`;

export const RightContainer = styled.div`
flex: 9;
`;
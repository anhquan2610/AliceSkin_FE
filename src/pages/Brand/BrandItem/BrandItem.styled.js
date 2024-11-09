import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
aspect-ratio: 16/9;
width: auto;
height: 150px;
object-fit: cover;
border-radius: var(--br-lg);
`;

export const InfoContainer = styled.div``;

export const Name = styled.div`
font-size: var(--fs-lg);
font-weight: var(--fw-semibold);
font-style: italic;
`;
import styled from "styled-components";

export const Container1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: var(--s-1);
`;

export const Image = styled.img`
border-radius: 50%;
aspect-ratio: 1/1;
width: 30%;
height: 30%;
overflow: hidden;
object-fit: cover;
border: 2px solid var(--gray);
`;

export const Name = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-medium);
`;
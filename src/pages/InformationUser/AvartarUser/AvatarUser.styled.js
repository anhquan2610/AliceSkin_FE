import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
`;

export const AvatarContainer = styled.div`
width: auto;
height: 200px;
margin-bottom: var(--s-3);
`;

export const AvatarImg = styled.img`
width: 100%;
height: 100%;
aspect-ratio: 1/1;
border-radius: 50%;
object-fit: cover;
border: 4px solid var(--green);
`;

export const Text = styled.div`
font-size: var(--fs-xl);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-2);
`;

export const Name = styled.div`
font-size: var(--fs-lg);
margin-bottom: var(--s-2);
font-weight: var(--fw-semibold);
`;

export const Email = styled.div`
font-size: var(--fs-lg);
font-weight: var(--fw-semibold);
font-style:     italic;
`;
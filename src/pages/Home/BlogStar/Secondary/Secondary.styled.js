import styled from "styled-components";

export const Container = styled.div`
flex-wrap: wrap;
`;

export const Title = styled.div`
font-size: var(--fs-3xl);
margin-bottom: var(--s-5);
`;

export const Description = styled.div`
font-size: var(--fs-lg);
margin-bottom: var(--s-10);
`;

export const BtnGetStarted = styled.button`
padding: var(--s-3);
border: 2px solid var(--gray);
border-radius: var(--br-md);
font-weight: var(--fw-semibold);
cursor: pointer;
&:hover {
    box-shadow: var(--shadow-4);
}
`;
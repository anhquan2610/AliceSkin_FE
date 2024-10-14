import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const TitleContainer = styled.div`
display: flex;
margin-bottom: var(--s-10);
`;

export const Title = styled.div`
font-size: var(--fs-2xl);
color: var(--white);
background-color: var(--green);
flex: 2;
padding: var(--s-3);
font-weight: var(--fw-semibold);

`;

export const Divider = styled.div`
flex: 10;
border-bottom: 4px solid var(--green);

`;

export const CommentContainer = styled.div`
margin-bottom: var(--s-10);
`;

export const BoxComment = styled.div`
border-bottom: 2px solid var(--gray);
border-bottom-style: dashed;
`;




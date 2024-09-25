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
border-bottom: 1px solid var(--gray);
`;

export const LabelComment = styled.div`
border: 2px solid var(--gray);
padding: var(--s-5) var(--s-8);
flex-wrap: nowrap;
`;

export const Text = styled.div`
font-size: var(--fs-xl);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-2);
`;

export const CommentInput = styled.textarea`
width: 100%;
border: 2px solid var(--gray);
border-radius: var(--br-md);
padding: var(--s-2);
font-size: var(--fs-md);
margin-bottom: var(--s-2);
`;

export const BtnSend = styled.button`
padding: var(--s-2);
background-color: var(--green);
color: var(--white);
cursor: pointer;
border-radius: var(--br-md);
font-size: var(--fs-sm);
`;


import styled from "styled-components";

export const Container = styled.form`

`;

export const LabelComment = styled.div`
border: 2px solid var(--gray);
padding: var(--s-5) var(--s-8);
flex-wrap: nowrap;
display: flex;
flex-direction: column;
`;

export const Text = styled.div`
font-size: var(--fs-xl);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-2);
`;

export const ContentContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const CommentInput = styled.textarea`
width: 100%;
border: 2px solid var(--gray);
border-radius: var(--br-md);
padding: var(--s-2);
font-size: var(--fs-md);
margin-bottom: var(--s-2);
resize: vertical;
`;

export const BtnContainer = styled.div`


`;

export const BtnSend = styled.button`
padding: var(--s-2) var(--s-5);
margin-left: var(--s-2);
background-color: var(--green);
color: var(--white);
cursor: pointer;
border-radius: var(--br-md);
font-size: var(--fs-md);
display: flex ;
justify-content: flex-end;

&:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
}
`;
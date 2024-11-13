import styled from "styled-components";
import { DEVICES } from "../../../../../config/responsiveUi";

export const Container = styled.form`

`;

export const LabelComment = styled.div`
border: 2px solid var(--gray);
padding: var(--s-2) var(--s-3);
flex-wrap: nowrap;
display: flex;
flex-direction: column;
@media ${DEVICES.TABLET} {
    padding: var(--s-5) var(--s-8);
}
`;

export const Text = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-2);
@media ${DEVICES.TABLET} {
    font-size: var(--fs-xl);
}
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
font-size: var(--fs-sm);
margin-bottom: var(--s-2);
resize: vertical;
@media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
}
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
font-size: var(--fs-sm);
display: flex ;
justify-content: flex-end;
@media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
}
&:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
}
`;
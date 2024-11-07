import styled from "styled-components";

export const Container = styled.form`
display: flex;

`;

export const LeftContainer = styled.div`
display: flex;
flex-direction: row;
flex: 8;
align-items: center;
`;

export const InputContainer = styled.div`
flex: 8;
margin-right: var(--s-2);
`;

export const InputReview = styled.input`
border: 3px solid var(--gray);
width: 100%;
padding: var(--s-2);
font-size: var(--fs-md);
border-radius: var(--br-md);
background-color: var(--gray-2);
`;

export const RateAndBtnContainer = styled.div`
flex: 4;
display: flex;
flex-direction: row;
gap: var(--s-2);
`;

export const RateStar = styled.div`

`;

export const RightContainer = styled.div`
flex: 4;
`;

export const BtnSubmit = styled.button``;

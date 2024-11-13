import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.form`
display: flex;
align-items: center;
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
padding: var(--s-1);
font-size: var(--fs-xs);
border-radius: var(--br-md);
background-color: var(--gray-2);
@media ${DEVICES.TABLET} {
    padding: var(--s-2);
font-size: var(--fs-md);
}
`;

export const RateAndBtnContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: var(--s-0);
@media ${DEVICES.TABLET} {
    gap: var(--s-2);
    flex: 4;
}
`;

export const RateStar = styled.div`

`;

export const RightContainer = styled.div`

@media ${DEVICES.TABLET} {
    flex: 4;
}
`;

export const BtnSubmit = styled.button``;

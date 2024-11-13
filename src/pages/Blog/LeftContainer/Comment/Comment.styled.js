import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const TitleContainer = styled.div`
display: flex;
margin-bottom: var(--s-3);
@media ${DEVICES.TABLET} {
    margin-bottom: var(--s-10);
}
`;

export const Title = styled.div`
font-size: var(--fs-lg);
color: var(--white);
background-color: var(--green);
flex: 2;
padding: var(--s-2);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET} {
    font-size: var(--fs-2xl);
    padding: var(--s-3);
}
`;

export const Divider = styled.div`
flex: 10;
border-bottom: 4px solid var(--green);

`;

export const CommentContainer = styled.div`
margin-bottom: var(--s-6);
@media ${DEVICES.TABLET} {
    margin-bottom: var(--s-10);
}
`;

export const BoxComment = styled.div`
border-bottom: 2px solid var(--gray);
border-bottom-style: dashed;
`;




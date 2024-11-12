import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";

export const Container = styled.div`
flex-wrap: wrap;
margin-bottom: var(--s-2);
`;

export const Title = styled.div`
font-size: var(--fs-xl);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-2);
@media ${DEVICES.DESKTOP} {
    font-size: var(--fs-3xl);
    margin-bottom: var(--s-5);
}
`;

export const Description = styled.div`
font-size: var(--fs-md);
margin-bottom: var(--s-5);
@media ${DEVICES.DESKTOP} {
    font-size: var(--fs-lg);
    margin-bottom: var(--s-10);
}
`;

export const BtnGetStarted = styled.button`
padding: var(--s-2);
border: 2px solid var(--gray);
font-size: var(--fs-xs);
border-radius: var(--br-md);
font-weight: var(--fw-semibold);
cursor: pointer;
&:hover {
    box-shadow: var(--shadow-4);
}
@media ${DEVICES.DESKTOP} {
    padding: var(--s-3);
    font-size: var(--fs-sm);
}
`;
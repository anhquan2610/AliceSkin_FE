import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
margin: var(--s-3) 0;
@media ${DEVICES.TABLET}{
    margin: var(--s-7) 0;
}
`;

export const TopContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-bottom: 5px solid var(--green);


`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items:  baseline;

`;

export const Title = styled.div`
font-size: var(--fs-sm);
font-weight: var(--fw-semibold);
margin-right: var(--s-3);
border: 1px solid var(--green);
background-color: var(--green);
color: var(--white);
padding: var(--s-2);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-3xl);
}
`;

export const Filter = styled.div`

`;

export const TotalReview = styled.div`
font-size: var(--fs-sm);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-lg);
}
`;

export const Description = styled.div``;

export const ReviewContainer = styled.div`
padding: var(--s-5) 0;
display: flex;

`;

export const AddReviewContainer = styled.div``;

export const ReviewItemContainer = styled.div`
flex: 6;
`;

export const Divider = styled.div`
display: none;
@media ${DEVICES.TABLET}{
    flex: 6;
}
`;
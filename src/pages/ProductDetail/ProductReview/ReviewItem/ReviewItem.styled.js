import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";

export const Container = styled.div`
display: flex;
flex-direction: row;
margin-bottom: var(--s-4);
gap: var(--s-2) ;
`;

export const LeftContainer = styled.div`
display: 2;
`;

export const ImageContainer = styled.div``;

export const ImageReviewer = styled.img`
aspect-ratio: 1/1;
width: 40px;
height: auto;
object-fit: cover;
overflow: hidden;
border-radius: 50%;
@media ${DEVICES.TABLET}{
    width: 50px;

}
`;

export const RightContainer = styled.div`
width: auto;
display: 10;
display: flex;
flex-direction: column;
background-color: var(--gray-2);
padding: var(--s-2);
border-radius: var(--br-lg);
@media ${DEVICES.TABLET}{
    padding: var(--s-3);
}
`;

export const RateNumber = styled.div`
font-size: var(--fs-xs);
font-weight: var(--fw-bold);
margin-bottom: var(--s-1);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
}
`;

export const InforeviewContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const Reviewer = styled.div`
font-size: var(--fs-sm);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
}
`;

export const ReviewDate = styled.div`
font-size: var(--fs-xs);
font-style: italic;
color: var(--dark-gray);
margin-left: var(--s-10);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-sm);
}
`;

export const EmailReviewer = styled.div`
font-size: var(--fs-xxs);
margin-bottom: var(--s-2);
font-style: italic;
@media ${DEVICES.TABLET}{
    font-size: var(--fs-xs);
    margin-bottom: var(--s-3);
}
`;

export const Content = styled.div`
font-size: var(--fs-sm);
@media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
}
`;
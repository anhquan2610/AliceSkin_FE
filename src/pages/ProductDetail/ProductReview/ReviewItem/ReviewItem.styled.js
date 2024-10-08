import styled from "styled-components";

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
width: 50px;
height: auto;
object-fit: cover;
overflow: visible;
border-radius: 50%;
`;

export const RightContainer = styled.div`
width: auto;
display: 10;
display: flex;
flex-direction: column;
background-color: var(--gray-2);
padding: var(--s-3);
border-radius: var(--br-lg);
`;

export const RateNumber = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-bold);
margin-bottom: var(--s-1);
`;

export const InforeviewContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const Reviewer = styled.div`
font-size: var(--fs-md);
`;

export const ReviewDate = styled.div`
font-size: var(--fs-sm);
font-style: italic;
color: var(--dark-gray);
margin-left: var(--s-10);
`;

export const EmailReviewer = styled.div`
font-size: var(--fs-xs);
margin-bottom: var(--s-3);
font-style: italic;
`;

export const Content = styled.div``;
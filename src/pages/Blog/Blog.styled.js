import styled from "styled-components";

export const Container = styled.div``;

export const ContainerOutlet = styled.div`
display: flex;
flex-direction: row;
padding: var(--s-5) var(--s-30);
gap: var(--s-10);
height: auto;
flex-wrap: wrap;
`;

export const LeftContainer = styled.div`
flex: 8;
`;

export const RightContainer = styled.div`
flex: 4;
`;


export const NoBlogsMessage = styled.div`
text-align: center;
width: 100%;
font-size: var(--fs-lg);
font-style: italic;
color: var(--gray);
`;
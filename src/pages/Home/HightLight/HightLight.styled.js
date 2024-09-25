import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
margin-bottom: var(--s-20);

`;

export const Image = styled.img`
position: relative;
height: auto;
width: 100%;
`;

export const BoxTitle = styled.div`
position: absolute;
margin-top: var(--s-2);
bottom: 0;
margin-bottom:var(--s-15);
margin-left: var(--s-10);
padding: var(--s-5) ;
z-index: 1;
background-color: var(--white);
box-shadow: var(--shadow-2);
border-radius: var(--br-md);
font-size: var(--fs-sm);
width: 30%;
`;

export const CongigBox = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-2);
`;

export const Title = styled.div`
font-size: var(--fs-2xl);
font-weight: var(--fw-semibold);

`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--s-10);
`;

export const TitleContainer = styled.div`
display: flex;
margin-bottom: var(--s-5);
`;

export const Title = styled.div`
flex: 1;
background-color: var(--green);
padding: var(--s-3) var(--s-4);
font-size: var(--fs-lg);
color: var(--white);
font-weight: var(--fw-semibold);
`;

export const Divider = styled.div`
flex: 11;
border-bottom: 4px solid var(--green);
`;

export const ListBlog = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowMoreButton = styled.button`
color: var(--black);
margin-top: var(--s-5);
padding: var(--s-2) var(--s-10);
cursor: pointer;
font-size: var(--fs-md);

`;
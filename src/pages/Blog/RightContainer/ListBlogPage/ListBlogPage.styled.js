import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--s-3);
  @media ${DEVICES.TABLET}{
    margin-bottom: var(--s-10);
  }
`;

export const TitleContainer = styled.div`
display: flex;
margin-bottom: var(--s-3);
`;

export const SearchContainer = styled.div`
margin-bottom: var(--s-3);
display: flex;
flex-direction: row;
align-items: center;
border-radius: var(--br-lg);
border: 2px solid var(--gray);
padding: var(--s-1) var(--s-2);
`;

export const SearchInput = styled.input`
font-size: var(--fs-md);
width: 100%;

`;

export const SearchIcon = styled.div``;

export const Title = styled.div`
flex: 1;
background-color: var(--green);
padding: var(--s-2);
font-size: var(--fs-lg);
color: var(--white);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET}{
  padding: var(--s-3) var(--s-4);
}
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
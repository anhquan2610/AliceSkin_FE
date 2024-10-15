import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: var(--s-4);
`;

export const TotalProduct = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
flex: 4;
`;

export const SearchContainer = styled.div`
margin-bottom: var(--s-3);
display: flex;
flex-direction: row;
align-items: center;
border-radius: var(--br-lg);
border: 2px solid var(--gray);
padding: var(--s-1) var(--s-2);
flex: 4;
`;

export const SearchInput = styled.input`
font-size: var(--fs-md);
width: 100%;

`;

export const SearchIcon = styled.div`

`;

export const FilterContainer = styled.div`
display: flex;
justify-content: flex-end;
gap: var(--s-2);
flex: 4;
`;

export const TextFilter = styled.div`
font-weight: var(--fw-semibold);
font-size: var(--fs-md);
`;

export const Filter = styled.div``;

export const ListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
justify-content: space-between;
row-gap: var(--s-10);
`;
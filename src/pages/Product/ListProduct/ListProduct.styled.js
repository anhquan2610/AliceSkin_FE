import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: var(--s-4);
`;

export const TotalProduct = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
`;

export const FilterContainer = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
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
row-gap: var(--s-5);
`;
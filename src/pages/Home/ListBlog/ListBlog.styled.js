import styled from "styled-components";

export const Container = styled.div`

padding: var(--s-5) 0;
`;

export const TopContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const Title = styled.div`
font-weight: var(--fw-semibold);
`;

export const Filter =   styled.div``;

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: var(--s-4) 0;
    row-gap: var(--s-8);
`;
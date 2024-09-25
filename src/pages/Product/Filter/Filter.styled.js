import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div``;

export const Title = styled.div`
  margin-bottom: var(--s-4);
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  border-bottom: 1px solid var(--black);
 
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: var(--s-5);
`;

export const Divider = styled.div`
  border-bottom: 1px solid var(--black);
`;

export const TypeFilter = styled.div`
 margin-bottom: var(--s-5);
`;

export const Filter = styled.input.attrs({ type: "checkbox" })``;

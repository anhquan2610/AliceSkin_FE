import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-1);
  margin-bottom: var(--s-1);
  @media ${DEVICES.TABLET} {
    margin-bottom: var(--s-4);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--s-0);
  }
`;

export const TotalProduct = styled.div`
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  flex: 4;
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: var(--s-1);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: var(--br-lg);
  border: 2px solid var(--gray);
  padding: 0 var(--s-1);
  flex: 4;
  @media ${DEVICES.TABLET} {
    margin-bottom: var(--s-3);
    padding: var(--s-1) var(--s-2);
  }
`;

export const SearchInput = styled.input`
  font-size: var(--fs-xs);
  width: 100%;
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
  }
`;

export const SearchIcon = styled.div``;

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
  justify-content: space-between;
  width: 100%;
  gap: var(--s-1);
  row-gap: var(--s-3);
  @media ${DEVICES.TABLET} {
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--s-10);
  row-gap: var(--s-10);
  justify-content: flex-start;
  }
`;

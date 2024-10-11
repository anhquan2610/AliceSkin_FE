import styled from "styled-components";

export const Container = styled.div`
  padding: var(--s-5) var(--s-30);
  
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Middle = styled.div`
  display: flex;
`;

export const NavButton = styled.button`
  background-color: var(--white);
  color: ${(props) => (props.isSelected ? "var(--green)" : "var(--black)")};
  padding: var(--s-3) var(--s-3);
  cursor: pointer;
  font-size: var(--fs-md);
  border: ${(props) => (props.isSelected ? "2px solid var(--green)" : "none")};
`;

export const RightContainer = styled.div`
  flex: 8;
`;

export const Content = styled.div``;

export const LeftContainer = styled.div`
  flex: 4;
`;

export const AvatarContainer = styled.div``;

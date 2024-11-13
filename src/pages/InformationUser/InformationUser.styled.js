import styled from "styled-components";
import { DEVICES } from '../../config/responsiveUi';

export const Container = styled.div`
  padding: var(--s-3) var(--s-10);
  display: flex;
  flex-direction: column;
  @media ${DEVICES.TABLET} {
    padding: var(--s-5) var(--s-30);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--s-5);
  @media ${DEVICES.TABLET} {
    margin-bottom: var(--s-10);
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${DEVICES.TABLET}{
    flex-direction: row;
  }
`;

export const NavButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})`
  background-color: var(--white);
  color: ${(props) => (props.isSelected ? "var(--green)" : "var(--black)")};
  padding: var(--s-1) var(--s-1);
  cursor: pointer;
  font-size: var(--fs-xs);
  border: ${(props) => (props.isSelected ? "2px solid var(--green)" : "none")};
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
    padding: var(--s-3) var(--s-3);
  }
`;

export const RightContainer = styled.div`
  flex: 8;
`;

export const Content = styled.div``;

export const LeftContainer = styled.div`
  flex: 4;
  margin-bottom: var(--s-5);
  @media ${DEVICES.TABLET} {
    margin-bottom: 0;
  }
`;

export const AvatarContainer = styled.div``;

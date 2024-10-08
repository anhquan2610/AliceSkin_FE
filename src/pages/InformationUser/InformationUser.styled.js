import styled from "styled-components";



export const Container = styled.div`
  padding: var(--s-5) var(--s-30);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: var(--s-3);
  justify-content: center;
  margin-bottom: 20px;
`;

export const Middle = styled.div`
display: flex;
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const RightContainer = styled.div`
flex: 8;
`;

export const Content = styled.div`
`;

export const LeftContainer = styled.div`
flex: 4;

`;

export const AvatarContainer = styled.div``;



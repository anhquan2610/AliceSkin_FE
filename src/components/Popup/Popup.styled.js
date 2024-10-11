import styled, { keyframes } from "styled-components";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

// Container cho Popup, định vị góc trên phải
export const PopupContainer = styled.div`
  position: fixed;
  top: var(--s-3);
  right: var(--s-2);
  background: var(--green);
  color: var(--white);
  padding: var(--s-3);
  border-radius: var(--br-md);
  box-shadow: var(--shadow-2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
  width: 300px;
  max-width: 90%; 
  animation: ${(props) => (props.isClosing ? slideOutLeft : slideInRight)} 1s forwards;
  ${(props) => props.isClosing && `opacity: 0;`}
  

  word-wrap: break-word; 
`;




import styled, { keyframes } from "styled-components";

// Keyframe cho hiệu ứng mở (từ phải ra)
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

// Keyframe cho hiệu ứng đóng (từ trái vào)
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
  top: 20px;
  right: 20px;
  background: var(--green);
  color: var(--white);
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  animation: ${(props) => (props.isClosing ? slideOutLeft : slideInRight)} 0.5s forwards;

  // Chỉ khi dùng animation slideOutLeft (khi đóng), ta sẽ làm cho container này biến mất hẳn sau khi kết thúc animation
  ${(props) => props.isClosing && `opacity: 0;`}
`;

// Nút đóng
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

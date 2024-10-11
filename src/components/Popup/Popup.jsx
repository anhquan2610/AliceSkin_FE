import React, { useEffect, useState } from "react";
import * as S from "./Popup.styled"; // Styled-components cho Popup

const Popup = ({ isOpen, children, duration = 3000 }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset trạng thái đóng khi mở lại Popup
      setIsClosing(false);
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);

  return <S.PopupContainer isClosing={isClosing}>{children}</S.PopupContainer>;
};

export default Popup;

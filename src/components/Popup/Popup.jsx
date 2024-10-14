import React, { useEffect, useState } from "react";
import * as S from "./Popup.styled";

const Popup = ({ isOpen, children, duration = 2000, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 200);
  };

  if (!isOpen && !isClosing) return null;

  return <S.PopupContainer data-is-closing={isClosing}>{children}</S.PopupContainer>;
};

export default Popup;

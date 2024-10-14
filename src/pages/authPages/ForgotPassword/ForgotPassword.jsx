import { useNavigate } from "react-router-dom";
import * as S from "./ForgotPassword.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, resetAuthState } from "../../../store/authSlice";
import Popup from "../../../components/Popup/Popup";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setIsPopupOpen(true);
    }
  }, [isSuccess, isError]);

  const handleCancel = () => {
    navigate("/login");
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    dispatch(resetAuthState());
  };

  return (
    <S.Container>
      <S.ContainerLeft />
      <S.ContainerMiddle>
        <S.Title>Reset Your Password</S.Title>
        <S.Description>
          We will send you an email to reset your password
        </S.Description>
        <S.ContainerForm onSubmit={handleSubmit}>
          <S.Label>Email</S.Label>
          <S.Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email "
          />
          <S.BtnSubmit type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </S.BtnSubmit>
          <S.BtnCancel onClick={handleCancel}>Cancel</S.BtnCancel>
          <Popup isOpen={isPopupOpen} onClose={handlePopupClose}>
            {message}
          </Popup>
        </S.ContainerForm>
      </S.ContainerMiddle>
      <S.ContainerRight />
    </S.Container>
  );
}

import { useNavigate } from "react-router-dom";
import * as S from "./ForgotPassword.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../store/authSlice";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  const handleCancel = () => {
    navigate("/login");
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
        </S.ContainerForm>
      </S.ContainerMiddle>
      <S.ContainerRight />
    </S.Container>
  );
}

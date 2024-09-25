import { Link, useNavigate } from "react-router-dom";
import * as S from "./ForgotPassword.styled";

export default function ForgotPassword() {
  const navigate = useNavigate();

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
        <S.ContainerForm>
          <S.Label>Email</S.Label>
          <S.Input type="text" placeholder="Enter Your Email " />
          <S.BtnSubmit>Submit</S.BtnSubmit>
          <S.BtnCancel onClick={handleCancel}>Cancel</S.BtnCancel> 
        </S.ContainerForm>
      </S.ContainerMiddle>
      <S.ContainerRight />
    </S.Container>
  );
}

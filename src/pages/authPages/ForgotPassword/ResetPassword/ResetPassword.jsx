import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./ResetPassword.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../../store/authSlice";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { isLoading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    dispatch(
      resetPassword({
        email,
        password,
        password_confirmation: passwordConfirmation,
        token,
      })
    ).then((result) => {
      if (result.type === "auth/resetPassword/fulfilled") {
        navigate("/login");
      }
    });
  };
  const handleCancel = () => {
    navigate("/forgotpassword");
  };

  return (
    <S.Container>
      <S.ContainerLeft />
      <S.ContainerMiddle>
        <S.Title>Reset Your Password</S.Title>
        <S.Description>
          Please enter your new password twice so we can verify that you typed
          it in correctly
        </S.Description>
        <S.ContainerForm onSubmit={handleSubmit}>
          <S.Group>
            <S.Label>Email</S.Label>
            <S.Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
            />
          </S.Group>
          <S.Group>
            <S.Label>New Password</S.Label>
            <S.Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your New Password"
              required
              minLength="8"
            />
          </S.Group>
          <S.Group>
            <S.Label>Confirm Password</S.Label>
            <S.Input
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              placeholder="Enter Your New Password Again"
              required
              minLength="8"
            />
          </S.Group>
          <S.BtnUpdate type="submit">
            {isLoading ? "Updating..." : "Update Password"}
          </S.BtnUpdate>
          <S.BtnCancel onClick={handleCancel}>Cancel</S.BtnCancel>
        </S.ContainerForm>
      </S.ContainerMiddle>
      <S.ContainerRight />
    </S.Container>
  );
}

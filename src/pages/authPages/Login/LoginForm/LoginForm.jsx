import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginForm.styled.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginApi } from "../../../../services/userService.js";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    loginApi(newUser, dispatch, navigate);
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Subtitle>
        Don’t have an account ?<span> </span>
        <Link to="/register" style={{ color: "var(--blue)" }}>
          Request account
        </Link>
      </S.Subtitle>
      <S.ContainerForm onSubmit={handleLogin}>
        <S.Label>Email</S.Label>
        <S.Input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Label>Password</S.Label>
        <S.Input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgotpassword">
          <S.ForgotPassword>Forgot password?</S.ForgotPassword>
        </Link>
        <S.BtnLogin type="submit">Login</S.BtnLogin>
      </S.ContainerForm>
      <S.BlankSpace />
      <S.ContainerBottom>
        <S.BtnLoginFacebook>Login with Facebook</S.BtnLoginFacebook>
        <S.BtnLoginGoogle>Login with Google</S.BtnLoginGoogle>
      </S.ContainerBottom>
    </S.Container>
  );
}

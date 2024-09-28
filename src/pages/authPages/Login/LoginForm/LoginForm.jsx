import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginForm.styled.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../../store/authSlice.js";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, token } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(signIn(credentials));
  };
  
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

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
        <S.BtnLogin type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </S.BtnLogin>
       
      </S.ContainerForm>
      <S.BlankSpace />
      <S.ContainerBottom>
        <S.BtnLoginFacebook>Login with Facebook</S.BtnLoginFacebook>
        <S.BtnLoginGoogle>Login with Google</S.BtnLoginGoogle>
      </S.ContainerBottom>
    </S.Container>
  );
}

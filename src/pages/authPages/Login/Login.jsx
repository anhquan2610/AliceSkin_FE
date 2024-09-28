import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";
import Login from "../../../assets/images/Login.png";

export default function LoginPage() {
  return (
    <S.Container>
      <S.ContainerForm>
        <LoginForm />
      </S.ContainerForm>
      <S.ContainerSpace />
      <S.ContainerImage>
        <S.Image src={Login} alt="Login" />
      </S.ContainerImage>
    </S.Container>
  );
}

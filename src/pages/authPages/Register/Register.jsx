import * as S from "./Register.styled.js";
import RegisterForm from "../Register/RegisterForm/RegisterForm.jsx"


export default function RegisterPage() {
  return (
    <S.Container>
      
      <S.ContainerLeft />
      <S.ContainerMiddle>
        <S.Title>Create Account</S.Title>
        <S.SubTitle>
          Already have an account?
          <a href="/login" style={{ color: "var(--blue)" }}>
            Sign in
          </a>{" "}
        </S.SubTitle>
        <S.ContainerForm>
          <RegisterForm />
        </S.ContainerForm>
      </S.ContainerMiddle>
      <S.ContainerRight />
    </S.Container>
  );
}

import { Link } from "react-router-dom";
import * as S from "./LandingPage.styled";

export default function Landing() {
  return (
    <S.Container>
      <S.TitleWeb>ALICES SKIN</S.TitleWeb>
      <S.Button>
        <Link to="/login">
          <S.BtnLogin>Login</S.BtnLogin>
        </Link>
        <Link to="/register">
          <S.BtnRegister>Register</S.BtnRegister>
        </Link>
      </S.Button>
    </S.Container>
  );
}

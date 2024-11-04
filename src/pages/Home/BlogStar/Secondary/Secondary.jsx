import { Link } from "react-router-dom";
import * as S from "./Secondary.styled";

export default function Secondary() {
  return (
    <S.Container>
      <S.Title>
        Alice Skin was developed as a student project to help people find their
        skincare routine.
      </S.Title>
      <S.Description>
        Take our survey to start receiving product recommendations curated just
        for you!
      </S.Description>
      <Link to="/Survey">
        <S.BtnGetStarted>Get Started !</S.BtnGetStarted>
      </Link>
    </S.Container>
  );
}

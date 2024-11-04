import * as S from "./Survey.styled";
import ImageSurvey from "../../assets/images/Rectangle 52.png";
import { Link } from "react-router-dom";

export default function Survey() {
  return (
    <S.Container>
      <S.Title>HEY THERE!</S.Title>
      <S.ImageContainer>
        <S.Image src={ImageSurvey} />
      </S.ImageContainer>
      <S.Text1>
        To help build your skin care routine, we’d like to learn a little more
        about you.
      </S.Text1>
      <S.Text2>
        At the end, we’ll also give you the opportunity to book a 1:1
        consultation with one of our in-house Skin Care Experts.
      </S.Text2>
      <Link to="/Survey/Question">
        <S.BtnTakeQuiz>Take the Quiz</S.BtnTakeQuiz>
      </Link>
      <S.Text3>
        This website uses cookies. By continuing to browse this site, you agree
        to our use of cookies. Read our Cookie Policy.
      </S.Text3>
    </S.Container>
  );
}

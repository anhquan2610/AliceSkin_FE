import { useDispatch, useSelector } from "react-redux";
import * as S from "./SkinInformation.styled";
import { useEffect } from "react";
import { getResponsesByUser } from "../../../store/surveySlice";
import { Link } from "react-router-dom";

export default function SkinInformation() {
  const response = useSelector((state) => state.survey.response);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResponsesByUser());
  }, [dispatch]);

  const filteredResponses = response.filter((response) =>
    ["Q1", "Q2", "Q6"].includes(response.question?.code)
  );

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Title>Skin Information</S.Title>
        <S.Divider />
      </S.ContainerHeader>
      <S.Description>Information from the survey:</S.Description>
      <S.ContainerContent>
        {filteredResponses.map((response) => (
          <S.Group key={response.response_id}>
            <S.Icon>
              <i className="bi bi-check-square-fill"></i>
            </S.Icon>
            <S.Category>{response.question?.category} - </S.Category>
            <S.Answer>{response.answer_text}</S.Answer>
          </S.Group>
        ))}
      </S.ContainerContent>
      <S.ButtonContainer>
        <Link to="/Survey/Update">
          <S.ButtonUpdate>Update</S.ButtonUpdate>
        </Link>
        <Link to="/RecommendItem">
          <S.ButtonSeeRecommend>See recommended products</S.ButtonSeeRecommend>
        </Link>
      </S.ButtonContainer>
    </S.Container>
  );
}

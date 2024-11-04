import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllQuestions,
  getResponsesByUser,
  resetSurveyState,
  resetUpdateSurveyState,
  updateSurveyResponses,
} from "../../../store/surveySlice";
import { useNavigate } from "react-router-dom";
import * as S from "./UpdateSurvey.styled";

export default function UpdateSurvey() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.survey.questions);
  const responsesFromStore = useSelector((state) => state.survey.response);
  const { isLoading, isSuccess } = useSelector((state) => state.survey);
  const navigate = useNavigate();
  const [responses, setResponses] = useState({});

  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(getResponsesByUser());
  }, [dispatch]);

  useEffect(() => {
    const initialResponses = {};
    responsesFromStore.forEach((response) => {
      initialResponses[response.question.code] = response.answer_text;
    });
    setResponses(initialResponses);
  }, [responsesFromStore]);

  const handleOptionChange = (code, answer) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [code]: answer,
    }));
  };

  const handleSubmit = () => {
    const formattedResponses = Object.entries(responses).map(
      ([code, answer]) => ({
        code,
        answer,
      })
    );
    dispatch(updateSurveyResponses(formattedResponses));
  };

  useEffect(
    () => {
      if (isSuccess) {
        navigate("/RecommendItem");
        dispatch(resetUpdateSurveyState());
      }
    },
    [isSuccess, navigate],
    dispatch
  );

  return (
    <S.Container>
      <S.TitleContaienr>
        <S.Title>Cập nhật câu trả lời khảo sát của bạn</S.Title>
        <S.IconTitle>
          <i className="bi bi-emoji-heart-eyes"></i>
        </S.IconTitle>
      </S.TitleContaienr>
      <S.QuestionContainer>
        {questions.map((question) => (
          <S.Question key={question.question_id}>
            <S.QuestionText>{question.question_text}</S.QuestionText>
            {question.type === "multiple_choice" && (
              <S.OptionContainer>
                {question.options.map((option, index) => (
                  <S.Option key={index}>
                    <S.RadioButton
                      type="radio"
                      name={question.code}
                      value={option}
                      onChange={() => handleOptionChange(question.code, option)}
                      checked={responses[question.code] === option}
                    />
                    {option}
                  </S.Option>
                ))}
              </S.OptionContainer>
            )}
          </S.Question>
        ))}
      </S.QuestionContainer>
      <S.ButtonContainer>
        <S.BtnSubmit onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Đang gửi..." : "Cập nhật"}
        </S.BtnSubmit>
      </S.ButtonContainer>
    </S.Container>
  );
}

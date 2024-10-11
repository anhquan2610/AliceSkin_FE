import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../../../store/productSlice";
import { useParams } from "react-router-dom";
import * as S from "./AddReview.styled";

export default function AddReview() {
  const [content, setContent] = useState("");
  const [rate, setRate] = useState(1);

  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.product);
  const { id: product_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = { content, rate };

    dispatch(addReview({ product_id, reviewData }));

    setContent("");
    setRate(1);
  };

  const handleStarClick = (starValue) => {
    setRate(starValue);
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.LeftContainer>
        <S.InputContainer>
          <S.InputReview
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your review"
            required
          />
        </S.InputContainer>
        <S.RateAndBtnContainer>
          <S.RateStar>
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`bi bi-star${star <= rate ? "-fill" : ""}`}
                onClick={() => handleStarClick(star)}
                style={{
                  cursor: "pointer",
                  color: star <= rate ? "var(--yellow)" : "var(--gray)",
                  fontSize: "var(--fs-xl)  ",
                  marginRight: "var(--s-1)",
                }}
              ></i>
            ))}
          </S.RateStar>
          <S.BtnSubmit type="submit" disabled={isLoading}>
            <i
              className="bi bi-send"
              style={{ fontSize: "var(--fs-2xl)", cursor: "pointer" }}
            ></i>
          </S.BtnSubmit>
        </S.RateAndBtnContainer>
      </S.LeftContainer>
      <S.RightContainer />
      {isError && <p>{isError}</p>}
    </S.Container>
  );
}

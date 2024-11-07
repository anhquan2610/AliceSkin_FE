import React from "react";
import * as S from "./ReviewForm.styled"; // Import styled components

export default function ReviewForm({
  content,
  rate,
  onContentChange,
  onRateChange,
  onSubmit,
}) {
  const handleStarClick = (starValue) => {
    onRateChange(starValue);
  };

  return (
    <S.Container onSubmit={onSubmit}>
      <S.LeftContainer>
        <S.InputContainer>
          <S.InputReview
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="Write your review"
            required
          />
        </S.InputContainer>
      </S.LeftContainer>

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
                fontSize: "var(--fs-xl)",
                marginRight: "var(--s-1)",
              }}
            ></i>
          ))}
        </S.RateStar>
      </S.RateAndBtnContainer>

      <S.RightContainer>
        <S.BtnSubmit type="submit">
          <i
            className="bi bi-send"
            style={{ fontSize: "var(--fs-2xl)", cursor: "pointer" }}
          ></i>
        </S.BtnSubmit>
      </S.RightContainer>
    </S.Container>
  );
}

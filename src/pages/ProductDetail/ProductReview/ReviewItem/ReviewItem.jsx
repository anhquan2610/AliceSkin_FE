import * as S from "./ReviewItem.styled";

export default function ReviewItem({ review }) {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.ImageContainer>
          <S.ImageReviewer src={review.user?.image} />
        </S.ImageContainer>
      </S.LeftContainer>
      <S.RightContainer>
        <S.RateNumber>{renderStars(review.rate)}</S.RateNumber>
        <S.InforeviewContainer>
          <S.Reviewer>{review.user?.name}</S.Reviewer>
          <S.ReviewDate>
            {new Date(review.created_at).toLocaleString("en-GB")}
          </S.ReviewDate>
        </S.InforeviewContainer>
        <S.EmailReviewer>{review.user?.email}</S.EmailReviewer>
        <S.Content>{review.content}</S.Content>
      </S.RightContainer>
    </S.Container>
  );
}

const renderStars = (rate) => {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`bi bi-star${star <= rate ? "-fill" : ""}`}
          style={{
            color: star <= rate ? "var(--yellow)" : "var(--gray)",
            marginRight: "var(--s-1)",
          }}
        ></i>
      ))}
    </span>
  );
};

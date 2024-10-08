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
        <S.RateNumber>
          Rating: {review.rate}
          <span
            style={{
              color: "var(--yellow)",
              marginLeft: "var(--s-1)",
              alignContent: "center",
            }}
          >
            <i className="bi bi-star-fill"></i>
          </span>
        </S.RateNumber>
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

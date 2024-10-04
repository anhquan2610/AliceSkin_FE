import { useDispatch, useSelector } from "react-redux";
import * as S from "./ProductReview.styled";
import ReviewItem from "./ReviewItem/ReviewItem";
import { useParams } from "react-router-dom";
import { getReviewByProductId } from "../../../store/productSlice";
import { useEffect } from "react";

export default function ProductReview() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.product.reviews);
  const { id: productId } = useParams();

  useEffect(() => {
    dispatch(getReviewByProductId(productId));
  }, [dispatch, productId]);

  return (
    <S.Container>
      <S.TopContainer>
        <S.TitleContainer>
          <S.Title>Review Of Product</S.Title>
          <S.TotalReview>(Tổng cộng: 20 Reviews)</S.TotalReview>
        </S.TitleContainer>
        <S.Filter>Filte</S.Filter>
      </S.TopContainer>
      <S.ReviewContainer>
        <S.ReviewItemContainer>
          {reviews.map((review, index) => (
            <ReviewItem key={`${review.id}-${index}`} review={review} />
          ))}
        </S.ReviewItemContainer>
        <S.Divider />
      </S.ReviewContainer>
    </S.Container>
  );
}

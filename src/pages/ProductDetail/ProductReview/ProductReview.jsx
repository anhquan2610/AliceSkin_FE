import { useDispatch, useSelector } from "react-redux";
import * as S from "./ProductReview.styled";
import ReviewItem from "./ReviewItem/ReviewItem";
import { useParams } from "react-router-dom";
import {
  getReviewByProductId,
  getTotalReviewByProductId,
} from "../../../store/productSlice";
import { useEffect } from "react";

export default function ProductReview() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.product.reviews);
  const { totalReviews } = useSelector((state) => state.product);
  const { id: productId } = useParams();

  useEffect(() => {
    dispatch(getReviewByProductId(productId));
    dispatch(getTotalReviewByProductId(productId));
  }, [dispatch, productId]);

  return (
    <S.Container>
      <S.TopContainer>
        <S.TitleContainer>
          <S.Title>Review Of Product</S.Title>
          <S.TotalReview>(Total: {totalReviews} Reviews)</S.TotalReview>
        </S.TitleContainer>
      </S.TopContainer>
      <S.ReviewContainer>
        <S.ReviewItemContainer>
          {reviews.map((review) => (
            <ReviewItem key={review.review_id} review={review} />
          ))}
        </S.ReviewItemContainer>
        <S.Divider />
      </S.ReviewContainer>
    </S.Container>
  );
}

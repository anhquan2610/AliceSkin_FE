import { useDispatch, useSelector } from "react-redux";
import * as S from "./OrderDetail.styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOrderByOrderId, submitReview } from "../../store/orderSlice";
import OrderItem from "./OrderItem/OrderItem";
import ReviewForm from "./ReviewForm/ReviewForm";

export default function OrderDetail() {
  const dispatch = useDispatch();
  const { id: orderId } = useParams();
  const orders = useSelector((state) => state.order.orders);
  const { isLoading } = useSelector((state) => state.order);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    dispatch(fetchOrderByOrderId(orderId));
  }, [dispatch, orderId]);

  const handleReviewChange = (index, field, value) => {
    const newReviews = [...reviews];
    newReviews[index] = { ...newReviews[index], [field]: value };
    setReviews(newReviews);
  };

  const handleSubmitReview = (index) => (e) => {
    e.preventDefault();

    const reviewData = {
      product_reviews: [
        {
          content: reviews[index]?.content,
          rate: reviews[index]?.rate || 1,
        },
      ],
    };
    dispatch(submitReview({ orderId, review: reviewData }));
    const newReviews = [...reviews];
    newReviews[index] = { content: "", rate: 1 };
    setReviews(newReviews);
  };

  if (!orders || !orders.cart_items) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.Title>Detail Your Order</S.Title>
      <S.ContainerContent>
        <S.Content>
          <S.Group>
            <S.DateOrder>
              Order Date:{" "}
              {new Date(orders.order_date).toLocaleDateString("en-GB")}
            </S.DateOrder>
            <S.Status>Status: {orders.status}</S.Status>
          </S.Group>
          <S.OrderItemContainer>
            {orders.cart_items.map((item, index) => (
              <div key={item.product_id}>
                <OrderItem item={item} />
                <ReviewForm
                  content={reviews[index]?.content || ""}
                  rate={reviews[index]?.rate || 1}
                  onContentChange={(value) =>
                    handleReviewChange(index, "content", value)
                  }
                  onRateChange={(value) =>
                    handleReviewChange(index, "rate", value)
                  }
                  onSubmit={handleSubmitReview(index)}
                />
              </div>
            ))}
          </S.OrderItemContainer>
          <S.AddressShipping>
            Address Shipping: {orders.shipping_address}
          </S.AddressShipping>
          <S.ShipPrice>
            Ship Cost:{" "}
            {parseInt(
              orders.shipping?.shipping_amount.replace(/,/g, ""),
              10
            ).toLocaleString("vi-VN")}{" "}
            VND
          </S.ShipPrice>
          <S.VoucherPrice>
            Voucher:{" "}
            - {parseInt(
              orders.voucher?.discount_amount.replace(/,/g, ""),
              10
            ).toLocaleString("vi-VN")}{" "}
            VND
          </S.VoucherPrice>
          <S.TotalPrice>
            Total:{" "}
            {parseInt(orders.total_amount.replace(/,/g, ""), 10).toLocaleString(
              "vi-VN"
            )}{" "}
            VND
          </S.TotalPrice>
        </S.Content>
      </S.ContainerContent>
    </S.Container>
  );
}

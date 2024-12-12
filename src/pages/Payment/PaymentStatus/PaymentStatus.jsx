import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./PaymentStatus.styled";
import { fetchPaymentStatus } from "../../../store/orderSlice";
import { notifyError, notifySuccess } from "../../../utils/Nontification.utils";
import image1 from "../../../assets/images/success.jpg";
import image2 from "../../../assets/images/faild.jpg";

export default function PaymentStatus() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { paymentStatus, isSuccess, isLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const params = {
      vnp_TransactionNo: queryParams.get("vnp_TransactionNo"),
      vnp_TxnRef: queryParams.get("vnp_TxnRef"),
      vnp_ResponseCode: queryParams.get("vnp_ResponseCode"),
      vnp_PayDate: queryParams.get("vnp_PayDate"),
      vnp_Amount: queryParams.get("vnp_Amount"),
      vnp_SecureHash: queryParams.get("vnp_SecureHash"),
    };

    if (Object.values(params).every(Boolean)) {
      dispatch(fetchPaymentStatus(params));
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (isSuccess === true) {
      notifySuccess("Payment successful!");
    }
  }, [isSuccess]);

  if (isLoading) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      {isSuccess ? (
        <S.PaymentResult>
          <S.ContainerImage>
            <S.Image src={image1} alt="Payment Success" />
          </S.ContainerImage>
          <S.Text>
            Payment Successfully. View your order and see you again!
          </S.Text>
        </S.PaymentResult>
      ) : (
        <S.PaymentResult>
          <S.ContainerImage>
            <S.Image src={image2} alt="Payment Failed" />
          </S.ContainerImage>
          <S.Text>
            Payment Failed. Please check your information and try again!
          </S.Text>
        </S.PaymentResult>
      )}
    </S.Container>
  );
}

import * as S from "./PaymentSuccess.styled";
import image from "../../../assets/images/thankyou.jpg";
import { useLocation } from "react-router-dom";

export default function PaymentSuccess() {
  const location = useLocation();
  const paymentUrl = location.state?.paymentUrl;

  return (
    <S.Container>
      <S.Text>Order confirmed successfully!</S.Text>
      <S.Text2>
        Thank you for your interest and order from us. If there is any problem,
        please contact us for help.
      </S.Text2>
      {paymentUrl && (
        <S.UrlContainer>
          <S.Text3>For payment details, please visit:</S.Text3>
          <S.UrlLink
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to view payment details
          </S.UrlLink>
        </S.UrlContainer>
      )}
      <S.ContainerImage>
        <S.Image src={image} alt="Thank you" />
      </S.ContainerImage>
    </S.Container>
  );
}

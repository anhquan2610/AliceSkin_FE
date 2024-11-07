import * as S from "./OrderItem.styled";

export default function OrderItem({ item }) {
  const totalAmountVND = parseInt(
    item.price.replace(/,/g, ""),
    10
  ).toLocaleString("vi-VN");
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={item.image} />
      </S.ImageContainer>
      <S.ContentContainer>
        <S.NameItem>Name: {item.product_name}</S.NameItem>
        <S.Group>
          <S.PriceItem>Price: {totalAmountVND} VND</S.PriceItem>
          <S.QuantityItem>Quantity: x{item.quantity}</S.QuantityItem>
        </S.Group>
      </S.ContentContainer>
    </S.Container>
  );
}

import * as S from "./ItemCart.styled";

export default function ItemCart({ item }) {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImageItem src={item.product.image} />
      </S.ContainerImage>
      <S.ContainerInfo>
        <S.NameItem>{item.product.name}</S.NameItem>
        <S.CapacityItem>{Math.floor(item.product.volume)} ml</S.CapacityItem>

        <S.Group>
          <S.PriceItem>
            {Math.floor(item.product.discounted_price).toLocaleString("vi-VN")} VND
          </S.PriceItem>

          <S.QuantityItem>Quantity: x{item.quantity}</S.QuantityItem>
        </S.Group>
      </S.ContainerInfo>
    </S.Container>
  );
}

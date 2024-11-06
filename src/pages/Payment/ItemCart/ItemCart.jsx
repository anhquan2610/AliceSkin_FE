import * as S from "./ItemCart.styled";

export default function ItemCart({ item }) {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImageItem src={item.product.image} />
      </S.ContainerImage>
      <S.ContainerInfo>
        <S.NameItem>{item.product.name}</S.NameItem>
        <S.CapacityItem>{item.product.volume}ml</S.CapacityItem>
        <S.Group>
          <S.PriceItem>{item.price}$</S.PriceItem>
          <S.QuantityItem>Quantity: x{item.quantity}</S.QuantityItem>
        </S.Group>
      </S.ContainerInfo>
    </S.Container>
  );
}

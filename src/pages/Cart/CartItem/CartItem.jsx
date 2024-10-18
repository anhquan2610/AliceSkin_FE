import { useState } from "react";
import * as S from "./CartItem.styled";

export default function CartItem({ item }) {
  const [count, setCount] = useState(item.quantity);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageItem src={item.product.images} alt="product" />
      </S.ImageContainer>
      <S.NameContainer>
        <S.ItemName>{item.product.name}</S.ItemName>
      </S.NameContainer>
      <S.InforContainer>
        <S.QuantityContainer>
          <S.ItemQuantity>{item.quantity}</S.ItemQuantity>
          <S.IconQuantityContainer>
            <S.BtnIncrement onClick={handleIncrement}>
              <i className="bi bi-caret-up-fill"></i>
            </S.BtnIncrement>
            <S.BtnDecrement onClick={handleDecrement}>
              <i className="bi bi-caret-down-fill"></i>
            </S.BtnDecrement>
          </S.IconQuantityContainer>
        </S.QuantityContainer>

        <S.ItemPrice>{item.price} $</S.ItemPrice>
        <S.IconDelete>
          <i className="bi bi-trash"></i>
        </S.IconDelete>
      </S.InforContainer>
    </S.Container>
  );
}

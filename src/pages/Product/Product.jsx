
import * as S from "./Product.styled";
import ListProduct from "./ListProduct/ListProduct";
import Filter from "./Filter/Filter";
import { useState } from "react";

export default function Product() {
  const [price, setPrice] = useState("none");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <S.Container>
      <S.ContainerOutlet>
        <S.TitleContainer>
          <S.Title>All Of Product</S.Title>
        </S.TitleContainer>
        <S.ProductContainer>
          <S.LeftContainer>
            <Filter priceFilter={price} onPriceFilterChange={handlePriceChange} />
          </S.LeftContainer>
          <S.RightContainer>
            <ListProduct priceFilter={price} />
          </S.RightContainer>
        </S.ProductContainer>
      </S.ContainerOutlet>
    </S.Container>
  );
}

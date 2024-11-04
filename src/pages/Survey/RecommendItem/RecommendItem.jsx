import { useSelector } from "react-redux";
import Item from "./Item/Item";
import * as S from "./RecommendItem.styled";
import { useNavigate } from "react-router-dom";

export default function RecommendItem() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/product");
  };

  const recommendedProducts = useSelector(
    (state) => state.survey.recommendedProducts
  );
  return (
    <S.Container>
      <S.TopContainer>
        <S.Title>Recomment product for you</S.Title>
      </S.TopContainer>
      <S.MiddleContainer>
        <S.RecommnedItemContainer>
          {recommendedProducts.map((product) => (
            <Item
              key={product.product_id}
              product={product}
              navigate={navigate}
            />
          ))}
        </S.RecommnedItemContainer>
      </S.MiddleContainer>
      <S.ButtonContainer>
        <S.ButtonAllProduct onClick={handleOnClick}>
          See all products
        </S.ButtonAllProduct>
      </S.ButtonContainer>
    </S.Container>
  );
}

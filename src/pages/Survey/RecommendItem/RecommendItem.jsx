import { useDispatch, useSelector } from "react-redux";
import Item from "./Item/Item";
import * as S from "./RecommendItem.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getRecommendedProducts } from "../../../store/surveySlice";

export default function RecommendItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recommendedProducts = useSelector(
    (state) => state.survey.recommendedProducts
  );

  useEffect(() => {
    dispatch(getRecommendedProducts());
  }, [dispatch]);

  const handleOnClick = () => {
    navigate("/product");
  };

  return (
    <S.Container>
      <S.TopContainer>
        <S.Title>Recommended products for you</S.Title>
      </S.TopContainer>
      <S.MiddleContainer>
        <S.RecommnedItemContainer>
          {recommendedProducts.length > 0 ? (
            recommendedProducts.map((product) => (
              <Item
                key={product.product_id}
                product={product}
                navigate={navigate}
              />
            ))
          ) : (
            <S.NoProductText>No product recommended for responses</S.NoProductText>
          )}
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

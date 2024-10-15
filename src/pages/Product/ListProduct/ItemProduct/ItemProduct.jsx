import TypeProduct from "../../../../components/TypeProduct/TypeProduct";
import * as S from "./ItemProduct.styled";

export default function ItemProduct({ product, navigate }) {
  const handleClick = () => {
    navigate(`/product/${product.product_id}`);
  };

  return (
    <S.Container onClick={handleClick}>
      <S.ContainerImage>
        <S.ImgProduct src={product.images} />
      </S.ContainerImage>
      <S.ContentContainer>
        <S.HashtagProduct>
          <TypeProduct />
        </S.HashtagProduct>
        <S.ReviewContainer>
          <S.RateStar>
            {product.rating}
            <S.Star>
              <i className="bi bi-star-fill"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star-fill"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star-fill"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star-fill"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star-fill"></i>
            </S.Star>
          </S.RateStar>
        </S.ReviewContainer>
        <S.ProductName>{product.name}</S.ProductName>
        <S.Description>{product.description}</S.Description>
        <S.PriceProduct>{product.price}$</S.PriceProduct>
      </S.ContentContainer>
    </S.Container>
  );
}

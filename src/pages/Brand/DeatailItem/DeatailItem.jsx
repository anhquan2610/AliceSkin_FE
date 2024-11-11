import * as S from "./DetailItem.styled";

export default function DeatailItem({ product, navigate }) {
  const handleClick = () => {
    navigate(`/product/${product.product_id}`);
  };

  return (
    <S.Container onClick={handleClick}>
      <S.ContainerImage>
        <S.ImgProduct src={product.image} />
      </S.ContainerImage>
      <S.ContentContainer>
        <S.HashtagProduct>
          <S.TypeProduct>{product.nature}</S.TypeProduct>
        </S.HashtagProduct>
        <S.ReviewContainer>
          <S.RateStar>Rating: {product.rating} / 5.0</S.RateStar>
        </S.ReviewContainer>
        <S.ProductName>{product.name}</S.ProductName>
        <S.Description>{product.description}</S.Description>
        <S.PriceProduct>
          <S.Price>
            {Math.floor(product.price).toLocaleString("vi-VN")} VND
          </S.Price>
          <S.DiscountPrice>
            {Math.floor(product.discounted_price).toLocaleString("vi-VN")} VND
          </S.DiscountPrice>
        </S.PriceProduct>
      </S.ContentContainer>
    </S.Container>
  );
}

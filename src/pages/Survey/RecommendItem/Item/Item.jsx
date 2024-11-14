import * as S from "./Item.styled";

export default function Item({ product, navigate }) {
  const handleClick = () => {
    navigate(`/product/${product.product_id}`);
  };

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;

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
          <S.RateStar>
            {[...Array(fullStars)].map((_, index) => (
              <S.Star key={index}>
                <i className="bi bi-star-fill"></i>
              </S.Star>
            ))}

            {hasHalfStar && (
              <S.Star>
                <i className="bi bi-star-half"></i>
              </S.Star>
            )}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
              (_, index) => (
                <S.Star key={index + fullStars}>
                  <i className="bi bi-star"></i>
                </S.Star>
              )
            )}
          </S.RateStar>
        </S.ReviewContainer>
        <S.ProductName>{product.name}</S.ProductName>
        <S.Description>{product.description}</S.Description>
        <S.PriceProduct>
          <S.Price>{product.price}$</S.Price>
          <S.DiscountPrice>{product.discounted_price}$</S.DiscountPrice>
        </S.PriceProduct>
      </S.ContentContainer>
    </S.Container>
  );
}

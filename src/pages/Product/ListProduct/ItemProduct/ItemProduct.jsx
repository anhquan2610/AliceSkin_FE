import * as S from "./ItemProduct.styled";

export default function ItemProduct({ product, navigate }) {
  const handleClick = () => {
    navigate(`/product/${product.product_id}`);
  };

  const imagesArray = JSON.parse(product.images);
  const imageUrl =
    imagesArray.length > 0 ? imagesArray[0] : "https://via.placeholder.com/150"; 

  return (
    <S.Container onClick={handleClick}>
      <S.ContainerImage>
        <S.ImgProduct src={imageUrl} alt={product.name} />
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
          <S.Price>{product.price}$</S.Price>
          <S.DiscountPrice>{product.discounted_price}$</S.DiscountPrice>
        </S.PriceProduct>
      </S.ContentContainer>
    </S.Container>
  );
}

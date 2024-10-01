
import TypeProduct from "../../../../components/TypeProduct/TypeProduct";
import * as S from "./ItemProduct.styled";


export default function ItemProduct({product}) {

 
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImgProduct src={product.images} />
      </S.ContainerImage>
      <S.ContentContainer>
        <S.HashtagProduct>
          <TypeProduct />
        </S.HashtagProduct>
        <S.ReviewContainer>
          <S.RateStar>
            <S.Star>
              <i className="bi bi-star"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star"></i>
            </S.Star>
            <S.Star>
              <i className="bi bi-star"></i>
            </S.Star>
          </S.RateStar>
          <S.RateNumber>12 Reviews</S.RateNumber>
        </S.ReviewContainer>
        <S.ProductName>{product.name}</S.ProductName>
        <S.Description>
          {product.description}
        </S.Description>
        <S.PriceProduct>{product.price}$</S.PriceProduct>
      </S.ContentContainer>
    </S.Container>
  );
}

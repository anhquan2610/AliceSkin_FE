import Product from "../../../../assets/images/Product.png";
import TypeProduct from "../../../../components/TypeProduct/TypeProduct";
import * as S from "./ItemProduct.styled";

export default function ItemProduct() {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImgProduct src={Product} />
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
        <S.ProductName>THE PLANT BASE</S.ProductName>
        <S.Description>
          DescriptionDescriptionDescriptionDescriptionDescripDescripDescripDescripDescriptiontionDescription
        </S.Description>
        <S.PriceProduct>Price $</S.PriceProduct>
      </S.ContentContainer>
    </S.Container>
  );
}

import * as S from "./BrandItem.styled";

export default function BrandItem({ brand, naviagte }) {

  const handleBrandClick = () => {
    naviagte(`/Brand_detail/${brand.brand_id}`);
    
  };
  return (
    <S.Container onClick={handleBrandClick}>
      <S.ImageContainer>
        <S.Image src={brand.image} alt={brand.name} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Name>{brand.name}</S.Name>
      </S.InfoContainer>
    </S.Container>
  );
}

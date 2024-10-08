import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import * as S from "./Product.styled";
import ListProduct from "./ListProduct/ListProduct";
import Filter from "./Filter/Filter";

export default function Product() {
  return (
    <S.Container>
      <S.ContainerOutlet>
        <S.TitleContainer>
          <S.Title>All Of Product</S.Title>
        </S.TitleContainer>
        <S.ProductContainer>
          <S.LeftContainer>
            <Filter />
          </S.LeftContainer>
          <S.RightContainer>
            <ListProduct />
          </S.RightContainer>
        </S.ProductContainer>
      </S.ContainerOutlet>
    </S.Container>
  );
}

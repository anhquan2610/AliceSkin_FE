import ProductInformation from "./ProductInformation/ProductInformation";
import ProductReview from "./ProductReview/ProductReview";
import * as S from "./ProductDetail.styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function ProductDetail() {
  return (
    <>
      <S.Container>
        <ProductInformation />
        <ProductReview />
      </S.Container>
    </>
  );
}

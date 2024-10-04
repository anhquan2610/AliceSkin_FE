import { useEffect } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import * as S from "./ListProduct.styled";
import { getAllProduct } from "../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ListProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.TotalProduct>Total: 900</S.TotalProduct>
        <S.FilterContainer>
          <S.TextFilter>Sort By:</S.TextFilter>
          <S.Filter>Filter</S.Filter>
        </S.FilterContainer>
      </S.HeaderContainer>
      <S.ListContainer>
        {products.products.map((product) => (
          <ItemProduct
            key={product.product_id}
            product={product}
            navigate={navigate}
          /> 
        ))}
      </S.ListContainer>
    </S.Container>
  );
}

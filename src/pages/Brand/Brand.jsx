import { useDispatch, useSelector } from "react-redux";
import * as S from "./Brand.styled";
import { useEffect } from "react";
import { getAllBrands, resetBrandState } from "../../store/brandSlice";
import BrandItem from "./BrandItem/BrandItem";
import { useNavigate } from "react-router-dom";

export default function Brand() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const brands = useSelector((state) => state.brand.brands);
  const { isLoading } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(resetBrandState());
  }, [dispatch]);

  if (isLoading) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.Title>All Brand</S.Title>
      <S.ListBrandContainer>
        {brands.map((brand) => (
          <BrandItem key={brand.brand_id} brand={brand} naviagte={navigate} />
        ))}
      </S.ListBrandContainer>
    </S.Container>
  );
}

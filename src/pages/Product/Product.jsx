import * as S from "./Product.styled";
import ListProduct from "./ListProduct/ListProduct";
import Filter from "./Filter/Filter";
import { useEffect, useState } from "react";
import BrandFilter from "./Filter/BrandFilter";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../store/brandSlice";

export default function Product() {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("none");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const brands = useSelector((state) => state.brand.brands);

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleBrandChange = (brands) => {
    setSelectedBrands(brands);
  };

  return (
    <S.Container>
      <S.ContainerOutlet>
        <S.TitleContainer>
          <S.Title>All Of Product</S.Title>
        </S.TitleContainer>
        <S.ProductContainer>
          <S.LeftContainer>
            <Filter
              priceFilter={price}
              onPriceFilterChange={handlePriceChange}
            />
            <BrandFilter
              selectedBrands={selectedBrands}
              onBrandChange={handleBrandChange}
              brands={brands}
            />
          </S.LeftContainer>
          <S.RightContainer>
            <ListProduct priceFilter={price} selectedBrands={selectedBrands} />
          </S.RightContainer>
        </S.ProductContainer>
      </S.ContainerOutlet>
    </S.Container>
  );
}

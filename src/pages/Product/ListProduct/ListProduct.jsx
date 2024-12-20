import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import * as S from "./ListProduct.styled";
import { getAllProduct } from "../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ListProduct({ priceFilter, selectedBrands }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const {isLoading} = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const filterByPrice = (product) => {
    if (priceFilter === "none") return true;

    const price = parseFloat(product.discounted_price);
    switch (priceFilter) {
      case "0-50000":
        return price >= 0 && price <= 50000;
      case "50000-100000":
        return price > 50000 && price <= 100000;
      case "100000+":
        return price > 100000;
      default:
        return true;
    }
  };

  const filterByBrand = (product) => {
    if (selectedBrands.length === 0) return true;
    return selectedBrands.includes(product.brand?.name);
  };

  const sortedProducts = products.filter(filterByPrice).filter(filterByBrand);
  if (isLoading) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.TotalProduct>
          Total: {sortedProducts.length} products.
        </S.TotalProduct>
        <S.SearchContainer>
          <S.SearchInput
            placeholder="Search by name or hashtags"
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.SearchIcon>
            <i className="bi bi-search"></i>
          </S.SearchIcon>
        </S.SearchContainer>
      </S.HeaderContainer>
      <S.ListContainer>
        {sortedProducts
          .filter((product) => {
            const searchLower = search.toLocaleLowerCase();
            const nameSearch = product.name
              .toLocaleLowerCase()
              .includes(searchLower);

            const natureSearch = product.nature
              .toLocaleLowerCase()
              .includes(searchLower);

            return searchLower === "" || nameSearch || natureSearch;
          })
          .map((product) => (
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

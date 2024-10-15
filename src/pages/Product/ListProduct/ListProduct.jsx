import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import * as S from "./ListProduct.styled";
import { getAllProduct } from "../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ListProduct({ priceFilter }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const { isLoading } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const filterByPrice = (product) => {
    if (priceFilter === "none") return true;

    const price = parseFloat(product.discounted_price);
    switch (priceFilter) {
      case "0-50":
        return price >= 0 && price <= 50;
      case "50-100":
        return price > 50 && price <= 100;
      case "100-150":
        return price > 100 && price <= 150;
      default:
        return true;
    }
  };

  const sortedProducts = products.filter(filterByPrice);

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

            return searchLower === "" || nameSearch;
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

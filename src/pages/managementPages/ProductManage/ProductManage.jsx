import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./ProductManage.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../../store/productSlice";
import ProductRows from "./ProductRows/ProductRows";
import ProductFilter from "./ProductFilter";
import AddProductModal from "./ProductModal/AddProductModal";

export default function ProductManage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [openAddProduct, setOpenAddProduct] = useState(false);

  const handleOpenAddProduct = () => {
    setOpenAddProduct(true);
  };

  const handleCloseAddProduct = () => {
    setOpenAddProduct(false);
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterChange = (filters) => {
    const { searchTerm, status } = filters;
    let filtered = products;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchLower)
      );
    }

    if (status) {
      filtered = filtered.filter((product) => product.status === status);
    }

    setFilteredProducts(filtered);
  };

  return (
    <S.Container>
      <S.Title>Product Manage</S.Title>
      <ProductFilter onFilterChange={handleFilterChange} />
      <S.MiddleContainer>
        <S.Description>List of products</S.Description>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleOpenAddProduct}
        >
          Add Product
        </Button>
      </S.MiddleContainer>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Discount Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <ProductRows key={product.product_id} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddProductModal open={openAddProduct} handleClose={handleCloseAddProduct} />
    </S.Container>
  );
}

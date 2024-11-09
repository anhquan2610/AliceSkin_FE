import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./BrandManage.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBrands } from "../../../store/brandSlice";
import BrandsRows from "./BrandsRows/BrandsRows";
import AddBrandModal from "./BrandsModal/AddBrandModal";
import BrandFilter from "./BrandFilter";

export default function BrandManage() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brand.brands);
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [openAddBrand, setOpenAddBrand] = useState(false);

  const handleOpenAddBrand = () => {
    setOpenAddBrand(true);
  };

  const handleCloseAddBrand = () => {
    setOpenAddBrand(false);
  };

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBrands(brands); 
  }, [brands]);

  const handleFilterChange = (filters) => {
    const { searchTerm } = filters;
    let filtered = brands;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((brand) =>
        brand.name.toLowerCase().includes(searchLower)
      );
    }

    setFilteredBrands(filtered); // Cập nhật danh sách đã lọc
  };

  return (
    <S.Container>
      <S.Title>Brand Manage</S.Title>
      <BrandFilter onFilterChange={handleFilterChange} />
      <S.MiddleContainer>
        <S.Description>List of brands</S.Description>
        <Button
          variant="contained"
          onClick={handleOpenAddBrand}
          size="large"
          color="success"
        >
          Add Brand
        </Button>
      </S.MiddleContainer>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Brand Image</TableCell>
              <TableCell>Brand Name</TableCell>
              <TableCell>Brand Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBrands.map((brand) => (
              <BrandsRows key={brand.brand_id} brand={brand} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddBrandModal open={openAddBrand} handleClose={handleCloseAddBrand} />
    </S.Container>
  );
}

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

export default function BrandManage() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brand.brands);
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
  return (
    <S.Container>
      <S.Title>Brand Manage</S.Title>
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
            {brands.map((brand) => (
              <BrandsRows key={brand.brand_id} brand={brand} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddBrandModal open={openAddBrand} handleClose={handleCloseAddBrand} />
    </S.Container>
  );
}

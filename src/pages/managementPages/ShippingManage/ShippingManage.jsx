import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./ShippingManage.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { showAllShippingManage } from "../../../store/shippingSlice";
import ShippingRows from "./ShippingRows/ShippingRows";
import AddShippingModal from "./ShippingModal/AddShippingModal";
import FilterShipping from "./FilterShipping";

export default function ShippingManage() {
  const dispatch = useDispatch();
  const shippings = useSelector((state) => state.shipping.shippings);
  const [openAddShipping, setOpenAddShipping] = useState(false);
  const [filteredShippings, setFilteredShippings] = useState(shippings);

  const handleOpenAddShipping = () => {
    setOpenAddShipping(true);
  };

  const handleCloseAddShipping = () => {
    setOpenAddShipping(false);
  };

  useEffect(() => {
    setFilteredShippings(shippings);
  }, [shippings]);

  const handleFilterChange = (filters) => {
    const { searchTerm } = filters;
    let filtered = shippings;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((shipping) =>
        shipping.name.toLowerCase().includes(searchLower)
      );
    }

    setFilteredShippings(filtered);
  };

  useEffect(() => {
    dispatch(showAllShippingManage());
  }, [dispatch]);

  return (
    <S.Container>
      <S.Title>Shipping Manage</S.Title>
      <FilterShipping onFilterChange={handleFilterChange} />
      <S.MiddleContainer>
        <S.Description>List of shipping</S.Description>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleOpenAddShipping}
        >
          Add Shipping
        </Button>
      </S.MiddleContainer>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Shipping Price</TableCell>
              <TableCell>Shipping Method</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredShippings.map((shipping) => (
              <ShippingRows key={shipping.id} shipping={shipping} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddShippingModal
        open={openAddShipping}
        handleClose={handleCloseAddShipping}
      />
    </S.Container>
  );
}

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./VoucherManage.syled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVoucher } from "../../../store/voucherSlice";
import VoucherRows from "./VoucherRows/VoucherRows";
import AddVoucherModal from "./VoucherModal/AddVoucherModal";
import VoucherFilter from "./VoucherFilter";

export default function VoucherManage() {
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.voucher.vouchers);
  const [openAddVoucher, setOpenAddVoucher] = useState(false);
  const [filteredVouchers, setFilteredVouchers] = useState(vouchers);

  useEffect(() => {
    dispatch(getAllVoucher());
  }, [dispatch]);

  useEffect(() => {
    setFilteredVouchers(vouchers);
  }, [vouchers]);

  const handleFilterChange = (filters) => {
    const { searchTerm, status } = filters;
    let filtered = vouchers;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((voucher) =>
        voucher.code.toLowerCase().includes(searchLower)
      );
    }

    if (status) {
      filtered = filtered.filter((voucher) => voucher.status === status);
    }

    setFilteredVouchers(filtered);
  };

  const handleOpenAddVoucher = () => {
    setOpenAddVoucher(true);
  };

  const handleCloseAddVoucher = () => {
    setOpenAddVoucher(false);
  };

  return (
    <S.Container>
      <S.Title>Voucher Manage</S.Title>
      <VoucherFilter onFilterChange={handleFilterChange} />
      <S.MiddleContainer>
        <S.Description>List of voucher</S.Description>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleOpenAddVoucher}
        >
          Add Voucher
        </Button>
      </S.MiddleContainer>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredVouchers.map((voucher) => (
              <VoucherRows key={voucher.voucher_id} voucher={voucher} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddVoucherModal
        open={openAddVoucher}
        handleClose={handleCloseAddVoucher}
      />
    </S.Container>
  );
}

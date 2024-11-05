import { Button, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteVoucherById } from "../../../../store/voucherSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteVoucherModal from "../VoucherModal/DeleteVoucherModal";
import { useState } from "react";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import UpdateVoucherModal from "../VoucherModal/UpdateVoucherModal";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ChangeStatusVoucherModal from "../VoucherModal/ChangeStatusVoucherModal";

export default function VoucherRows({ voucher }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [selectedVoucherId, setSelectedVoucherId] = useState(null);

  const handleClickOpenStatus = (voucherId) => {
    setSelectedVoucherId(voucherId);
    setOpenStatus(true);
  };

  const handleCloseStatus = () => {
    setOpenStatus(false);
    setSelectedVoucherId(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteVoucher = () => {
    dispatch(deleteVoucherById(voucher.voucher_id))
      .unwrap()
      .then(() => {
        handleClose();
      });
  };

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" align="left">
          {voucher.code}
        </TableCell>
        <TableCell>{voucher.discount_amount}$</TableCell>
        <TableCell>{formatDate(voucher.start_date)}</TableCell>
        <TableCell>{formatDate(voucher.expiry_date)}</TableCell>
        <TableCell>{voucher.status}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--green-fresh)" }}
            startIcon={<UpgradeOutlinedIcon />}
            onClick={handleClickOpenUpdate}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--blue)", ml: 2 }}
            startIcon={<PublishedWithChangesIcon />}
            onClick={() => handleClickOpenStatus(voucher.voucher_id)}
          >
            Change Status
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ ml: 2 }}
            startIcon={<DeleteIcon />}
            onClick={handleClickOpen}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <UpdateVoucherModal
        open={openUpdate}
        handleClose={handleCloseUpdate}
        voucher={voucher}
      />

      <ChangeStatusVoucherModal
        open={openStatus}
        onClose={handleCloseStatus}
        voucherId={selectedVoucherId}
      />

      <DeleteVoucherModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteVoucher}
      />
    </>
  );
}

import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteShippingById } from "../../../../store/shippingSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteShippingModal from "../ShippingModal/DeleteShippingModal";
import UpdateShippingModal from "../ShippingModal/UpdateShippingModal";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";

export default function ShippingRows({ shipping }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteShipping = () => {
    dispatch(deleteShippingById(shipping.id))
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

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" align="left">
          {shipping.name}
        </TableCell>
        <TableCell>
          {shipping.shipping_amount ? `${shipping.shipping_amount}$` : "0.00$"}{" "}
        </TableCell>
        <TableCell>{shipping.method}</TableCell>
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
            color="error"
            sx={{ ml: 2 }}
            startIcon={<DeleteIcon />}
            onClick={handleClickOpen}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <UpdateShippingModal
        open={openUpdate}
        handleClose={handleCloseUpdate}
        shipping={shipping}
      />

      <DeleteShippingModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteShipping}
      />
    </>
  );
}

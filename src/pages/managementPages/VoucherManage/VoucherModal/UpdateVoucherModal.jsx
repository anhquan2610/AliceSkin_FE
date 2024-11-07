import { useDispatch, useSelector } from "react-redux";
import {
  resetVoucherState,
  updateVoucherById,
} from "../../../../store/voucherSlice";
import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function UpdateVoucherModal({ open, handleClose, voucher }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.voucher);

  const [voucherData, setVoucherData] = useState({
    code: voucher.code || "",
    discount_amount: voucher.discount_amount || "",
    start_date: voucher.start_date || "",
    expiry_date: voucher.expiry_date || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucherData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateVoucher = (e) => {
    e.preventDefault();
    if (!isLoading) {
      dispatch(
        updateVoucherById({
          voucher_id: voucher.voucher_id,
          voucherData,
        })
      );
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(resetVoucherState());
    }
  }, [isSuccess, handleClose, dispatch]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Update Voucher
        </Typography>
        <Box sx={{ mt: 4, gap: 3, display: "flex", flexDirection: "column" }}>
          <TextField
            fullWidth
            label="Code"
            name="code"
            value={voucherData.code}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Discount Amount"
            name="discount_amount"
            type="number"
            value={
              voucherData.discount_amount
                ? Math.floor(voucherData.discount_amount)
                : ""
            }
            onChange={handleChange}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Start Date
          </Typography>
          <TextField
            fullWidth
            name="start_date"
            type="date"
            value={voucherData.start_date}
            onChange={handleChange}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Expiry Date
          </Typography>
          <TextField
            fullWidth
            name="expiry_date"
            type="date"
            value={voucherData.expiry_date}
            onChange={handleChange}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          color="success"
          fullWidth
          sx={{ mt: 4 }}
          onClick={handleUpdateVoucher}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
}

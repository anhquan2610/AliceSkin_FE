import { useDispatch, useSelector } from "react-redux";
import {
  addVoucher,
  getAllVoucher,
  resetVoucherState,
} from "../../../../store/voucherSlice";
import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function AddVoucherModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.voucher);

  const [voucherData, setVoucherData] = useState({
    code: "",
    discount_amount: "",
    start_date: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucherData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddVoucher = (e) => {
    e.preventDefault();
    if (!isLoading) {
      dispatch(addVoucher(voucherData));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(resetVoucherState());
    }
  }, [isSuccess, dispatch, handleClose]);

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
        <Typography variant="h4" gutterBottom>
          Add Voucher
        </Typography>
        <form onSubmit={handleAddVoucher}>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Code Number
          </Typography>
          <TextField
            required
            fullWidth
            label="Voucher Code"
            name="code"
            value={voucherData.code}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Discount Price
          </Typography>
          <TextField
            required
            fullWidth
            label="Discount Amount"
            name="discount_amount"
            type="number"
            value={voucherData.discount_amount}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Start Date
          </Typography>
          <TextField
            required
            fullWidth
            name="start_date"
            type="date"
            value={voucherData.start_date}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            End Date
          </Typography>
          <TextField
            required
            fullWidth
            name="expiry_date"
            type="date"
            value={voucherData.expiry_date}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
          >
            Add
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

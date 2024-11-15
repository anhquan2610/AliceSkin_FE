import { useDispatch, useSelector } from "react-redux";
import {
  addShipping,
  resetShippingState,
  showAllShippingManage,
} from "../../../../store/shippingSlice";
import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function AddShippingModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.shipping);

  const [shippingData, setShippingData] = useState({
    name: "",
    shipping_amount: "",
    method: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddShipping = (e) => {
    e.preventDefault();
    if (!isLoading) {
      dispatch(addShipping(shippingData));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(showAllShippingManage());
      dispatch(resetShippingState());
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
          width: {
            xs: "80%", 
            sm: "400px", 
            lg: "500px", 
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add Shipping
        </Typography>
        <form onSubmit={handleAddShipping}>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={shippingData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            required
            fullWidth
            label="Price"
            name="shipping_amount"
            value={shippingData.shiping_amount}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            required
            fullWidth
            label="Method"
            name="method"
            value={shippingData.method}
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

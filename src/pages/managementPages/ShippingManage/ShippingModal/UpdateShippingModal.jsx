import { useDispatch, useSelector } from "react-redux";
import {
  resetShippingState,
  updateShippingById,
} from "../../../../store/shippingSlice";
import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function UpdateShippingModal({ open, handleClose, shipping }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.shipping);

  const [shippingData, setShippingData] = useState({
    name: shipping.name || "",
    shipping_amount: shipping.shipping_amount || "",
    method: shipping.method || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateShipping = (e) => {
    e.preventDefault();
    if (!isLoading) {
      dispatch(
        updateShippingById({
          shipping_id: shipping.id,
          shippingData,
        })
      );
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(resetShippingState());
    }
  }, [isSuccess, handleClose, dispatch]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Shipping Method
        </Typography>
        <Box sx={{ mt: 4, gap: 3, display: "flex", flexDirection: "column" }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={shippingData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Price"
            name="shipping_amount"
            value={
              shippingData.shipping_amount
                ? Math.floor(shippingData.shipping_amount)
                : ""
            }
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Method"
            name="method"
            value={shippingData.method}
            onChange={handleChange}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          color="success"
          fullWidth
          sx={{ mt: 4 }}
          onClick={handleUpdateShipping}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
}

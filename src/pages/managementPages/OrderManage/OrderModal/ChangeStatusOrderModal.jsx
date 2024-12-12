import { useDispatch } from "react-redux";
import {
  changeOrderStatus,
  fetchAllOrders,
} from "../../../../store/orderSlice";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};

export default function ChangeStatusOrderModal({ open, onClose, orderId }) {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status) {
      dispatch(changeOrderStatus({ order_id: Number(orderId), status }))
        .then((result) => {
          if (changeOrderStatus.fulfilled.match(result)) {
            dispatch(fetchAllOrders());
          }
        })
        .catch((error) => {
          console.error("Failed to change order status:", error);
        })
        .finally(() => {
          onClose();
        });
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" mb={2}>
          Change Order Status
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="" disabled>
                Select Status
              </MenuItem>

              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" fullWidth>
            Change Status
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

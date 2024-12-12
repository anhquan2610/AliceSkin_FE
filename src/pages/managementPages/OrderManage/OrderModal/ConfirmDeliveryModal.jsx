import { Modal, Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { confirmDelivery, fetchAllOrders } from "../../../../store/orderSlice";

const ConfirmDeliveryModal = ({ open, handleClose, orderId }) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(confirmDelivery(orderId))
      .unwrap()
      .then(() => {
        dispatch(fetchAllOrders());
        handleClose();
      })
      .catch((error) => {
        console.error("Error confirming delivery: ", error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="confirm-delivery-modal"
      aria-describedby="modal-to-confirm-order-delivery"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="confirm-delivery-modal" variant="h6" component="h2">
          Delivery Confirmation
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Are you sure you want to confirm delivery for this order?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 3, ml: 2 }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ConfirmDeliveryModal;

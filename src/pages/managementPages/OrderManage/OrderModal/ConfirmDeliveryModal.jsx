
import { Modal, Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { confirmDelivery, fetchAllOrders } from "../../../../store/orderSlice";

const ConfirmDeliveryModal = ({ open, handleClose, orderId }) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    // Gọi action xác nhận giao hàng
    dispatch(confirmDelivery(orderId))
      .unwrap()
      .then(() => {
        // Sau khi xác nhận thành công, gọi action để lấy lại danh sách đơn hàng
        dispatch(fetchAllOrders());
        handleClose();
      })
      .catch((error) => {
        // Xử lý lỗi nếu cần
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
          Xác nhận giao hàng
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Bạn có chắc chắn muốn xác nhận giao hàng cho đơn hàng này không?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleConfirm}
        >
          Xác nhận
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 3, ml: 2 }}
          onClick={handleClose}
        >
          Hủy
        </Button>
      </Box>
    </Modal>
  );
};

export default ConfirmDeliveryModal;

import { Box, Button, Modal, Typography } from "@mui/material";

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

export default function DeleteShippingModal({
  open,
  handleClose,
  onConfirmDelete,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Are you sure to delete this method ship?
        </Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="contained"
            size="medium"
            color="error"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="success"
            onClick={onConfirmDelete}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

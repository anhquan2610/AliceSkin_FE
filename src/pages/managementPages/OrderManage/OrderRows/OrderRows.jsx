import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ChangeStatusOrderModal from "../OrderModal/ChangeStatusOrderModal";
import ViewIcon from "@mui/icons-material/Visibility";
import ConfirmDeliveryModal from "../OrderModal/ConfirmDeliveryModal";
import CheckIcon from "@mui/icons-material/Check";

export default function OrderRows({ order }) {
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const dispatch = useDispatch();

  const handleClickOpenStatus = (orderId) => {
    setSelectedOrderId(orderId);
    setOpenStatus(true);
  };

  const handleCloseStatus = () => {
    setOpenStatus(false);
    setSelectedOrderId(null);
  };

  const handleOpenModal = (orderId) => {
    setSelectedOrderId(orderId);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{order.order_id}</TableCell>
        <TableCell>{order.user_name} </TableCell>
        <TableCell>{order.shipping_name}</TableCell>
        <TableCell>{order.payment_method}</TableCell>
        <TableCell>{order.payment_status}</TableCell>
        <TableCell>{order.status}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            sx={{ marginRight: 2 }}
            size="small"
            color="success"
            startIcon={<CheckIcon />}
            onClick={() => handleOpenModal(order.order_id)}
            disabled={
              order.status === "Delivered" || order.status === "Completed"
            }
          >
            Confirm Delivery
          </Button>

          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--blue)" }}
            startIcon={<PublishedWithChangesIcon />}
            onClick={() => handleClickOpenStatus(order.order_id)}
            disabled={order.status === "Completed"}
          >
            Change Status
          </Button>
        </TableCell>
      </TableRow>

      <ConfirmDeliveryModal
        open={open}
        handleClose={handleCloseModal}
        orderId={selectedOrderId}
      />

      <ChangeStatusOrderModal
        open={openStatus}
        onClose={handleCloseStatus}
        orderId={selectedOrderId}
      />
    </>
  );
}

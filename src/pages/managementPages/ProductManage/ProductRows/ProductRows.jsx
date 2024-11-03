import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductById } from "../../../../store/productSlice";
import DeleteProductModal from "../ProductModal/DeleteProductModal";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ChangeStatusProductModal from "../ProductModal/ChangeStatusProductModal";
import { Link } from "react-router-dom";

export default function ProductRows({ product }) {
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [openStatus, setOpenStatus] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpenStatus = (productId) => {
    setSelectedProductId(productId);
    setOpenStatus(true);
  };

  const handleCloseStatus = () => {
    setOpenStatus(false);
    setSelectedProductId(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProductById(product.product_id))
      .unwrap()
      .then(() => {
        handleClose();
      });
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell
          component="th"
          align="left"
          style={{
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {product.name}
        </TableCell>
        <TableCell>{product.brand?.name}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.discounted_price}</TableCell>
        <TableCell>{product.quantity}</TableCell>
        <TableCell>{product.status}</TableCell>
        <TableCell>
          <Link
            to={{
              pathname: `/manage/products/update/${product.product_id}`,
              state: { product_id: product.product_id },
            }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{ color: "var(--green-fresh)" }}
              startIcon={<UpgradeOutlinedIcon />}
            >
              Update
            </Button>
          </Link>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--blue)", ml: 2 }}
            startIcon={<PublishedWithChangesIcon />}
            onClick={() => handleClickOpenStatus(product.product_id)}
          >
            Change Status
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

      <DeleteProductModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteProduct}
      />

      <ChangeStatusProductModal
        open={openStatus}
        onClose={handleCloseStatus}
        productId={selectedProductId}
      />
    </>
  );
}

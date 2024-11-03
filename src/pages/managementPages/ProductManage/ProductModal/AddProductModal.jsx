import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  resetProductState,
} from "../../../../store/productSlice";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { resetImageState, uploadImage } from "../../../../store/imageSlice";
import { notifySuccess } from "../../../../utils/Nontification.utils";

export default function AddProductModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading: isProductLoading, isSuccess } = useSelector(
    (state) => state.product
  );
  const { isLoading: isImageLoading, imageUrl } = useSelector(
    (state) => state.image
  );

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    discount: "",
    quantity: "",
    brand_id: "",
    images: [],
    volume: "",
    nature: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadImage(file));
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setProductData((prev) => ({
        ...prev,
        images: [...prev.images, imageUrl],
      }));
      dispatch(resetImageState());
    }
  }, [imageUrl, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Product added successfully!");
      handleClose();
      dispatch(resetProductState());

      setProductData({
        name: "",
        price: "",
        discount: "",
        quantity: "",
        brand_id: "",
        images: [],
        volume: "",
        nature: "",
        description: "",
      });
    }
  }, [isSuccess, dispatch, handleClose]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(productData));
  };

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
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" mb={2}>
          Add New Product
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--s-1)",
          }}
        >
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={productData.name}
            onChange={handleChange}
            required
            sx={{ flex: "1 1 48%" }}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            fullWidth
            margin="normal"
            value={productData.price}
            onChange={handleChange}
            required
            sx={{ flex: "1 1 48%" }}
          />
          <TextField
            label="Discount"
            name="discount"
            type="number"
            fullWidth
            margin="normal"
            value={productData.discount}
            onChange={handleChange}
            sx={{ flex: "1 1 48%" }}
          />
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            fullWidth
            margin="normal"
            value={productData.quantity}
            onChange={handleChange}
            sx={{ flex: "1 1 48%" }}
          />
          <TextField
            label="Brand ID"
            name="brand_id"
            fullWidth
            margin="normal"
            value={productData.brand_id}
            onChange={handleChange}
            required
            sx={{ flex: "1 1 48%" }}
          />

          <TextField
            label="Volume"
            name="volume"
            type="number"
            fullWidth
            margin="normal"
            value={productData.volume}
            onChange={handleChange}
            sx={{ flex: "1 1 48%" }}
          />
          <TextField
            label="Nature"
            name="nature"
            fullWidth
            margin="normal"
            value={productData.nature}
            onChange={handleChange}
            placeholder="e.g., new, best seller, exclusive"
            sx={{ flex: "1 1 48%" }}
          />
          <TextField
            label="Image"
            type="file"
            accept="image/*"
            fullWidth
            margin="normal"
            onChange={handleImageChange}
            sx={{ flex: "1 1 100%" }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            margin="normal"
            value={productData.description}
            onChange={handleChange}
            sx={{ flex: "1 1 100%" }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddProduct}
          disabled={isProductLoading || isImageLoading}
          sx={{ mt: 3 }}
        >
          {isProductLoading ? "Adding..." : "Add Product"}
        </Button>
      </Box>
    </Modal>
  );
}

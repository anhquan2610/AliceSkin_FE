import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetBrandState, updateBrandById } from "../../../../store/brandSlice";
import { uploadImage, resetImageState } from "../../../../store/imageSlice";
import { notifySuccess } from "../../../../utils/Nontification.utils";

export default function UpdateBrandModal({ open, handleClose, brand }) {
  const dispatch = useDispatch();
  const { isLoading: isBrandLoading, isSuccess } = useSelector(
    (state) => state.brand
  );
  const { isLoading: isImageLoading, imageUrl } = useSelector(
    (state) => state.image
  );

  const [brandData, setBrandData] = useState({
    name: brand.name || "",
    description: brand.description || "",
    image: brand.image || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrandData((prev) => ({
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
      setBrandData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
      dispatch(resetImageState());
    }
  }, [imageUrl, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(resetBrandState());
    }
  }, [isSuccess, dispatch, handleClose]);

  const handleUpdateBrand = (e) => {
    e.preventDefault();
    dispatch(updateBrandById({ brand_id: brand.brand_id, brandData }));
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
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" mb={2}>
          Update Brand
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={brandData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            margin="normal"
            value={brandData.description}
            onChange={handleChange}
          />
          <TextField
            label="Image"
            type="file"
            accept="image/*"
            fullWidth
            margin="normal"
            onChange={handleImageChange}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleUpdateBrand}
          disabled={isBrandLoading || isImageLoading}
          sx={{ mt: 3 }}
        >
          {isBrandLoading ? "Updating..." : "Update Brand"}
        </Button>
      </Box>
    </Modal>
  );
}

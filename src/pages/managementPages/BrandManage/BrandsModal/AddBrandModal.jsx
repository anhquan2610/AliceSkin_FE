import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBrand,
  getAllBrands,
  resetBrandState,
} from "../../../../store/brandSlice";
import { uploadImage, resetImageState } from "../../../../store/imageSlice";
import {
  notifySuccess,
  notifyWarning,
} from "../../../../utils/Nontification.utils";

export default function AddBrandModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading: isBrandLoading, isSuccess } = useSelector(
    (state) => state.brand
  );
  const { isLoading: isImageLoading, imageUrl } = useSelector(
    (state) => state.image
  );

  const [brandData, setBrandData] = useState({
    name: "",
    description: "",
    image: "",
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
      dispatch(getAllBrands());
      dispatch(resetBrandState());

      setBrandData({
        name: "",
        description: "",
        image: "",
      });
    }
  }, [isSuccess, dispatch, handleClose]);

  const handleAddBrand = (e) => {
    e.preventDefault();

    if (!brandData.image || !brandData.name || !brandData.description) {
      notifyWarning("Please fill in all fields!");
      return;
    }

    dispatch(addBrand(brandData));
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
          Add New Brand
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
            required
            label="Description"
            name="description"
            fullWidth
            margin="normal"
            value={brandData.description}
            onChange={handleChange}
          />
          <TextField
            required
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
          onClick={handleAddBrand}
          disabled={isBrandLoading || isImageLoading}
          sx={{ mt: 3 }}
        >
          {isBrandLoading ? "Adding..." : "Add Brand"}
        </Button>
      </Box>
    </Modal>
  );
}

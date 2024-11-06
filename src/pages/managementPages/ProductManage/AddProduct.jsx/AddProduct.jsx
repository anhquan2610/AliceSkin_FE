import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { getAllBrands } from "../../../../store/brandSlice";
import { resetImageState, uploadImage } from "../../../../store/imageSlice";
import {
  addNewProduct,
  resetProductState,
} from "../../../../store/productSlice";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../../../utils/Nontification.utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  PRODUCT_TYPES,
  MAIN_INGREDIENTS,
  TARGET_SKIN_TYPES,
} from "../ProductValue";

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading: isImageLoading, imageUrl } = useSelector(
    (state) => state.image
  );
  const { isSuccess } = useSelector((state) => state.product);
  const brands = useSelector((state) => state.brand.brands);

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    quantity: "",
    brand_id: "",
    image: "",
    volume: "",
    nature: "",
    product_type: "",
    main_ingredient: "",
    target_skin_type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadImage(file));
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
      dispatch(resetImageState());
    }
  }, [imageUrl, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Product added successfully!");
      navigate("/manage/products");
      dispatch(resetProductState());
    }
  }, [isSuccess, dispatch, navigate]);

  return (
    <Card>
      <IconButton
        sx={{
          color: "var(--black)",
          mb: "var(--s-3)",
        }}
        onClick={() => navigate("/manage/products")}
      >
        <ArrowBackIcon />
      </IconButton>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add New Product
        </Typography>
        <Box
          display="flex"
          gap={4}
          alignItems="flex-start"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            alignItems="center"
            width="40%"
          >
            {formData.image && (
              <Box
                component="img"
                src={formData.image}
                alt="Product"
                sx={{ width: "100%", height: "auto", marginTop: 2 }}
              />
            )}
            <Button
              variant="contained"
              component="label"
              color="primary"
              disabled={isImageLoading}
            >
              {isImageLoading ? "Uploading..." : "Upload Image"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
          </Box>

          <Box component="form" onSubmit={handleSubmit} flex="1">
            <TextField
              fullWidth
              name="name"
              label="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              name="discount"
              label="Discount (%)"
              type="number"
              value={formData.discount}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              name="quantity"
              label="Quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              margin="normal"
            />
            <FormControl fullWidth margin="normal" sx={{ flex: "1 1 48%" }}>
              <InputLabel id="brand-select-label">Brand</InputLabel>
              <Select
                labelId="brand-select-label"
                name="brand_id"
                value={formData.brand_id}
                onChange={(e) =>
                  setFormData({ ...formData, brand_id: e.target.value })
                }
                required
              >
                {brands.map((brand) => (
                  <MenuItem key={brand.brand_id} value={brand.brand_id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              name="volume"
              label="Volume"
              type="number"
              value={formData.volume}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              name="nature"
              label="Nature"
              value={formData.nature}
              onChange={handleInputChange}
              margin="normal"
            />
            <FormControl fullWidth margin="normal" sx={{ flex: "1 1 48%" }}>
              <InputLabel id="product-type-select-label">
                Product Type
              </InputLabel>
              <Select
                labelId="product-type-select-label"
                name="product_type"
                value={formData.product_type}
                onChange={handleInputChange}
                required
              >
                {PRODUCT_TYPES.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" sx={{ flex: "1 1 48%" }}>
              <InputLabel id="main-ingredient-select-label">
                Main Ingredient
              </InputLabel>
              <Select
                labelId="main-ingredient-select-label"
                name="main_ingredient"
                value={formData.main_ingredient}
                onChange={handleInputChange}
                required
              >
                {MAIN_INGREDIENTS.map((ingredient, index) => (
                  <MenuItem key={index} value={ingredient}>
                    {ingredient}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" sx={{ flex: "1 1 48%" }}>
              <InputLabel id="target-skin-type-select-label">
                Target Skin Type
              </InputLabel>
              <Select
                labelId="target-skin-type-select-label"
                name="target_skin_type"
                value={formData.target_skin_type}
                onChange={handleInputChange}
                required
              >
                {TARGET_SKIN_TYPES.map((skinType, index) => (
                  <MenuItem key={index} value={skinType}>
                    {skinType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

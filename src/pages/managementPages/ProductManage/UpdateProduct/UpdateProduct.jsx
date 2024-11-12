import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetProductState,
  getProductById,
  updateProductByAdmin,
} from "../../../../store/productSlice";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
  CardMedia,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { notifySuccess } from "../../../../utils/Nontification.utils";
import { uploadImage } from "../../../../store/imageSlice";
import { getAllBrands } from "../../../../store/brandSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  PRODUCT_TYPES,
  MAIN_INGREDIENTS,
  TARGET_SKIN_TYPES,
  PRODUCT_NATURES,
} from "../ProductValue";

export default function UpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: product_id } = useParams();

  const { selectedProduct, isLoading, isSuccess } = useSelector(
    (state) => state.product
  );
  const brands = useSelector((state) => state.brand.brands);

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    discount: "",
    quantity: "",
    brand_id: "",
    image: "",
    volume: "",
    nature: "",
    description: "",
    product_type: "",
    main_ingredient: "",
    target_skin_type: "",
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);

  useEffect(() => {
    dispatch(getProductById(product_id));
  }, [dispatch, product_id]);

  useEffect(() => {
    if (selectedProduct) {
      setProductData({
        name: selectedProduct.name || "",
        price: selectedProduct.price || "",
        discount: selectedProduct.discount || "",
        quantity: selectedProduct.quantity || "",
        brand_id: selectedProduct.brand_id || "",
        image: selectedProduct.image || "",
        volume: selectedProduct.volume || "",
        nature: selectedProduct.nature || "",
        description: selectedProduct.description || "",
        product_type: selectedProduct.product_type || "",
        main_ingredient: selectedProduct.main_ingredient || "",
        target_skin_type: selectedProduct.target_skin_type || "",
      });
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Cập nhật sản phẩm thành công!");
      dispatch(resetProductState());
      navigate("/manage/products");
    }
  }, [isSuccess, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      const url = URL.createObjectURL(file);
      setProductData((prev) => ({
        ...prev,
        image: url,
      }));
    }
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let imagesUrl = productData.image;

    const brand = brands.find((b) => b.brand_id === productData.brand_id);
    if (brand) {
      productData.brand_id = brand.brand_id;
    }

    if (thumbnailFile) {
      dispatch(uploadImage(thumbnailFile))
        .then((result) => {
          if (uploadImage.fulfilled.match(result)) {
            imagesUrl = result.payload;
            const updatedProductData = {
              ...productData,
              image: imagesUrl,
            };
            dispatch(
              updateProductByAdmin({
                product_id,
                productData: updatedProductData,
              })
            );
          }
        })
        .catch((error) => {
          console.error("Lỗi khi tải ảnh lên:", error);
        });
    } else {
      const updatedProductData = {
        ...productData,
        image: productData.image,
      };
      dispatch(
        updateProductByAdmin({ product_id, productData: updatedProductData })
      );
    }
  };

  return (
    <Card sx={{ height: "auto" }}>
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
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Cập nhật sản phẩm: {productData.name}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1, paddingRight: 2 }}>
            <CardMedia
              component="img"
              sx={{
                height: "auto",
                width: "100%",
                objectFit: "cover",
                aspectRatio: 1 / 1,
              }}
              image={productData.image}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              label="Tên sản phẩm"
              name="name"
              fullWidth
              margin="normal"
              value={productData.name}
              onChange={handleChange}
              required
            />

            <Button
              variant="outlined"
              component="label"
              fullWidth
              margin="normal"
            >
              Chọn ảnh
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <TextField
              label="Giá"
              name="price"
              fullWidth
              margin="normal"
              value={productData.price ? Math.floor(productData.price) : ""}
              onChange={handleChange}
              required
            />
            <TextField
              label="Giảm giá (%)"
              name="discount"
              fullWidth
              margin="normal"
              value={
                productData.discount ? Math.floor(productData.discount) : ""
              }
              onChange={handleChange}
            />
            <TextField
              label="Số lượng"
              name="quantity"
              fullWidth
              margin="normal"
              value={productData.quantity}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="brand-select-label">Chọn thương hiệu</InputLabel>
              <Select
                labelId="brand-select-label"
                name="brand_id"
                value={productData.brand_id}
                onChange={handleChange}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand.brand_id} value={brand.brand_id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Dung tích"
              name="volume"
              fullWidth
              margin="normal"
              value={productData.volume ? Math.floor(productData.volume) : ""}
              onChange={handleChange}
            />

            <FormControl fullWidth margin="normal" required>
              <InputLabel id="product_nature-select-label">
                Tính chất
              </InputLabel>
              <Select
                labelId="product_nature-select-label"
                name="nature"
                value={productData.nature}
                onChange={handleChange}
              >
                {PRODUCT_NATURES.map((nature) => (
                  <MenuItem key={nature} value={nature}>
                    {nature}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Mô tả"
              name="description"
              fullWidth
              margin="normal"
              value={productData.description}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="product_type-select-label">
                Loại sản phẩm
              </InputLabel>
              <Select
                labelId="product_type-select-label"
                name="product_type"
                value={productData.product_type}
                onChange={handleChange}
              >
                {PRODUCT_TYPES.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="main_ingredient-select-label">
                Thành phần chính
              </InputLabel>
              <Select
                labelId="main_ingredient-select-label"
                name="main_ingredient"
                value={productData.main_ingredient}
                onChange={handleChange}
              >
                {MAIN_INGREDIENTS.map((ingredient) => (
                  <MenuItem key={ingredient} value={ingredient}>
                    {ingredient}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="target_skin_type-select-label">
                Loại da mục tiêu
              </InputLabel>
              <Select
                labelId="target_skin_type-select-label"
                name="target_skin_type"
                value={productData.target_skin_type}
                onChange={handleChange}
              >
                {TARGET_SKIN_TYPES.map((skinType) => (
                  <MenuItem key={skinType} value={skinType}>
                    {skinType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProduct}
          disabled={isLoading}
        >
          {isLoading ? "Đang tải...." : "Cập nhật sản phẩm"}
        </Button>
      </CardActions>
    </Card>
  );
}

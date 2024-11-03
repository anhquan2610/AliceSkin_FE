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
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { notifySuccess } from "../../../../utils/Nontification.utils";
import { uploadImage } from "../../../../store/imageSlice";

export default function UpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: product_id } = useParams();

  const { selectedProduct, isLoading, isSuccess } = useSelector(
    (state) => state.product
  );
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    discount: "",
    quantity: "",
    brand_id: "",
    images: [], // Đảm bảo images là một mảng
    volume: "",
    nature: "",
    description: "",
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
        images: JSON.parse(selectedProduct.images || "[]"), // Đảm bảo images là một mảng
        volume: selectedProduct.volume || "",
        nature: selectedProduct.nature || "",
        description: selectedProduct.description || "",
      });
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Updated product successfully!");
      dispatch(resetProductState());
      navigate("/manage/products");
    }
  }, [isSuccess, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "quantity" ? parseInt(value) : value;
    setProductData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      const url = URL.createObjectURL(file);
      setProductData((prev) => ({
        ...prev,
        images: [url],
      }));
    }
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let imagesUrl = productData.images;

    if (thumbnailFile) {
      dispatch(uploadImage(thumbnailFile))
        .then((result) => {
          if (uploadImage.fulfilled.match(result)) {
            imagesUrl = [result.payload];
            const updatedProductData = {
              name: productData.name,
              price: productData.price,
              discount: productData.discount,
              quantity: productData.quantity,
              brand_id: productData.brand_id,
              images: imagesUrl,
              volume: productData.volume,
              nature: productData.nature,
              description: productData.description,
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
          console.error("Error uploading image:", error);
        });
    } else {
      const updatedProductData = {
        name: productData.name,
        price: productData.price,
        discount: productData.discount,
        quantity: productData.quantity,
        brand_id: productData.brand_id,
        images: productData.images,
        volume: productData.volume,
        nature: productData.nature,
        description: productData.description,
      };
      dispatch(
        updateProductByAdmin({ product_id, productData: updatedProductData })
      );
    }
  };

  return (
    <Card sx={{ height: "auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Update Product: {productData.name}
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
              image={
                productData.images.length > 0
                  ? productData.images[0]
                  : "https://via.placeholder.com/600"
              }
              alt="Product Image"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              label="Name Product"
              name="name"
              fullWidth
              margin="normal"
              value={productData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Chọn ảnh"
              type="file"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Giá"
              name="price"
              type="number"
              fullWidth
              margin="normal"
              value={productData.price}
              onChange={handleChange}
              required
            />
            <TextField
              label="Giảm giá (%)"
              name="discount"
              type="number"
              fullWidth
              margin="normal"
              value={productData.discount}
              onChange={handleChange}
            />
            <TextField
              label="Số lượng"
              name="quantity"
              type="number"
              fullWidth
              margin="normal"
              value={productData.quantity}
              onChange={handleChange}
            />
            <TextField
              label="ID thương hiệu"
              name="brand_id"
              fullWidth
              margin="normal"
              value={productData.brand_id}
              onChange={handleChange}
              required
            />
            <TextField
              label="Dung tích"
              name="volume"
              type="number"
              fullWidth
              margin="normal"
              value={productData.volume}
              onChange={handleChange}
            />
            <TextField
              label="Tính chất"
              name="nature"
              fullWidth
              margin="normal"
              value={productData.nature}
              onChange={handleChange}
              placeholder="ví dụ: mới, bán chạy, độc quyền"
            />
            <TextField
              label="Mô tả"
              name="description"
              fullWidth
              margin="normal"
              value={productData.description}
              onChange={handleChange}
            />
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
          {isLoading ? "Uploading...." : "Update Product"}
        </Button>
      </CardActions>
    </Card>
  );
}

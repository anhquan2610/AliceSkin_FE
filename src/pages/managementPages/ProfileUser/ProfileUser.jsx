import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Avatar,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { fetchUserByToken, updateUser } from "../../../store/authSlice";
import { uploadImage } from "../../../store/imageSlice";

export default function ProfileUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { isLoading } = useSelector((state) => state.auth);

  // Initialize state for user information
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    image: "",
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);

  // Handle changes in user information
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image file changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  // Submit updated information when user clicks the update button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (thumbnailFile) {
      dispatch(uploadImage(thumbnailFile))
        .then((result) => {
          if (uploadImage.fulfilled.match(result)) {
            const imageUrl = result.payload;
            const updatedUserData = { ...formData, image: imageUrl };
            dispatch(
              updateUser({ id: user.id, userData: updatedUserData })
            ).then(() => {
              dispatch(fetchUserByToken());
            });
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    } else {
      dispatch(updateUser({ id: user.id, userData: formData })).then(() => {
        dispatch(fetchUserByToken());
      });
    }
  };

  useEffect(() => {
    // Call fetchUserByToken when the component mounts or after login
    dispatch(fetchUserByToken());
  }, [dispatch]);

  useEffect(() => {
    // Update formData when user data changes
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        dob: user.dob || "",
        gender: user.gender || "",
        address: user.address || "",
        image: user.image || "",
      });
    }
  }, [user]);

  const isFormChanged =
    formData.name !== user.name ||
    formData.phone !== user.phone ||
    formData.dob !== user.dob ||
    formData.gender !== user.gender ||
    formData.address !== user.address ||
    formData.image !== user.image;

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Welcome {user?.role}, {user?.name}!
      </Typography>

      <Card>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Box flex={1} mr={4}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                fullWidth
                sx={{
                  mb: 2,
                }}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                value={user?.email || ""}
                fullWidth
                sx={{
                  mb: 2,
                }}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                fullWidth
                sx={{
                  mb: 2,
                }}
                onChange={handleChange}
              />

              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
                sx={{
                  mb: 2,
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>

              <TextField
                label="Address"
                name="address"
                value={formData.address}
                fullWidth
                sx={{
                  mb: 2,
                }}
                onChange={handleChange}
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                fullWidth
                sx={{
                  mb: 2,
                }}
                onChange={handleChange}
              />
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                src={formData.image || ""}
                alt={formData.name}
                sx={{ width: 200, height: 200 }}
              />
            </Box>
          </Box>

          <Box mt={2}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginBottom: "2" }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!isFormChanged || isLoading} // Disable if no changes
          >
            {isLoading ? "Updating..." : "Update Information"}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

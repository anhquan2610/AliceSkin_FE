import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Avatar,
  Box,
 
} from "@mui/material";
import { fetchUserByToken } from "../../../store/authSlice";

export default function ProdfileUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUserByToken());
  }, [dispatch]);

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
        }}
      >
        WealCome {user.role}, {user.name}!
      </Typography>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center">
            
            <Box flex={1} mr={4}>
              <TextField
                label="Tên"
                value={user.name || ""}
                fullWidth
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Email"
                value={user.email || ""}
                fullWidth
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Ngày sinh"
                value={user.dob || ""}
                fullWidth
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Giới tính"
                value={user.gender || ""}
                fullWidth
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Địa chỉ"
                value={user.address || ""}
                fullWidth
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Số điện thoại"
                value={user.phone || ""}
                fullWidth
                margin="normal"
                sx={{
                  readOnly: true,
                }}
              />
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                src={user.image || ""}
                alt={user.name}
                sx={{ width: 200, height: 200 }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

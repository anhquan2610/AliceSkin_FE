import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { ChangeRoleUser } from "../../../../store/userSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%", 
    sm: "400px", 
    lg: "450px", 
  },
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};

const ChangeRoleModal = ({ open, onClose, userId }) => {
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role) {
      dispatch(ChangeRoleUser({ userId, role }))
        .unwrap()
        .then(() => {
          onClose();
        })
        .catch((error) => {
          console.error("Failed to change role:", error);
        });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" mb={2}>
          Change User Role
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Change Role
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ChangeRoleModal;

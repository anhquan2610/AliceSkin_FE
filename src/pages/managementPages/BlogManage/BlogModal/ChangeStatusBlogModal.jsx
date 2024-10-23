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
import { changeStatusBlogByAdmin } from "../../../../store/blogSlice";
import { notifySuccess } from "../../../../utils/Nontification.utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};

const ChangeStatusModal = ({ open, onClose, blogId }) => {
  const [status, setStatus] = useState(""); // Trạng thái ban đầu là chuỗi rỗng
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status) {
      dispatch(changeStatusBlogByAdmin({ blog_id: blogId, status }))
        .unwrap()
        .then(() => notifySuccess("Change status successfully"))
        .then(() => {
          onClose();
        });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" mb={2}>
          Change Blog Status
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="" disabled>
                Select Status
              </MenuItem>
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="published">Published</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Change Status
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ChangeStatusModal;

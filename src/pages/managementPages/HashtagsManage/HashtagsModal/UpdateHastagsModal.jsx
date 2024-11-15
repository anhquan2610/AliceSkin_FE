import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import {
  updateHastag,
  resetHashtagsState,
} from "../../../../store/hastagsSlice";

export default function UpdateHashtagsModal({ open, handleClose, hashtag }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, message } = useSelector(
    (state) => state.hastag
  );

  const [hashtagData, setHashtagData] = useState({
    name: hashtag.name || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHashtagData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateHashtag = (e) => {
    e.preventDefault();
    if (!isLoading) {
      dispatch(
        updateHastag({ hastag_id: hashtag.id, hastagData: hashtagData })
      );
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(resetHashtagsState());
    }
  }, [isSuccess, handleClose, dispatch]);

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
          width: {
            xs: "80%", 
            sm: "400px", 
            lg: "500px", 
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Hashtag
        </Typography>
        {message && <Typography color="error">{message}</Typography>}
        <TextField
          fullWidth
          margin="normal"
          label="Hashtag Name"
          name="name"
          value={hashtagData.name}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateHashtag}
          disabled={isLoading}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
}

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addHastag,
  getAllHastags,
  resetHashtagsState,
} from "../../../../store/hastagsSlice";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function AddHashtagsModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.hastag);

  const [hashtagData, setHashtagData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHashtagData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddHashtag = (e) => {
    e.preventDefault();
    if (!isLoading) {
      dispatch(addHastag(hashtagData)).then(() => {
        dispatch(getAllHastags());
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(resetHashtagsState());
    }
  }, [isSuccess, handleClose]);

  return (
    <Modal open={open} onClose={handleClose}>
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
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add Hashtag
        </Typography>
        <form onSubmit={handleAddHashtag}>
          <TextField
            required
            fullWidth
            margin="normal"
            id="name"
            label="Name"
            name="name"
            value={hashtagData.name}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Add
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

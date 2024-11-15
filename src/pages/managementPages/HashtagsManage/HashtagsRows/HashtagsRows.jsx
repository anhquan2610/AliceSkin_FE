import { Button, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import UpdateHastagsModal from "../HashtagsModal/UpdateHastagsModal";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteHastagById } from "../../../../store/hastagsSlice";
import DeleteHashtagsModal from "../HashtagsModal/DeleteHashtagsModal";

export default function HashtagsRows({ hashtag }) {
  const dispatch = useDispatch();
  const [openUpdate, setOpenUpdate] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteHashtag = () => {
    dispatch(deleteHastagById(hashtag.id))
      .unwrap()
      .then(() => {
        handleClose();
      });
  };

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{hashtag.name}</TableCell>
        <TableCell>{hashtag.usage_count}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--green-fresh)", marginRight: 2 }}
            startIcon={<UpgradeOutlinedIcon />}
            onClick={handleClickOpenUpdate}
          >
            Update
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="error"
           
            startIcon={<DeleteIcon />}
            onClick={handleClickOpen}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <DeleteHashtagsModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteHashtag}
      />

      <UpdateHastagsModal
        open={openUpdate}
        handleClose={handleCloseUpdate}
        hashtag={hashtag}
      />
    </>
  );
}

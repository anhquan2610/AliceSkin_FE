import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteQuestionById } from "../../../../store/surveySlice";
import DeleteQuestionModal from "../QuestionsModal/DeleteQuestionModal";
import UpdateQuestionModal from "../QuestionsModal/UpdateQuestionModal";

export default function QuestionsRows({ question }) {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteQuestion = () => {
    dispatch(deleteQuestionById(question.question_id))
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
        <TableCell>{question.category}</TableCell>
        <TableCell>{question.question_text}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--green-fresh)" }}
            startIcon={<UpgradeOutlinedIcon />}
            onClick={handleClickOpenUpdate}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ ml: 2 }}
            startIcon={<DeleteIcon />}
            onClick={handleClickOpen}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>



      <UpdateQuestionModal
        open={openUpdate}
        handleClose={handleCloseUpdate}
        question={question}
      />

      <DeleteQuestionModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteQuestion}
      />
    </>
  );
}

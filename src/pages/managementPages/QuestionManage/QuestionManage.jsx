import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./QuestionManage.styled";
import QuestionsRows from "./QuestionsRows/QuestionRows";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllQuestions } from "../../../store/surveySlice";
import AddQuestionModal from "./QuestionsModal/AddQuestionModal";

export default function QuestionManage() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.survey.questions);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  return (
    <S.Container>
      Question Manage
      <S.MiddleContainer>
        <S.Description>List of manage</S.Description>
        <Button
          variant="contained"
          onClick={handleOpenAdd}
          size="large"
          color="success"
        >
          Add Brand
        </Button>
      </S.MiddleContainer>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question) => (
              <QuestionsRows key={question.question_id} question={question} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddQuestionModal open={openAdd} handleClose={handleCloseAdd} />
    </S.Container>
  );
}

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
import FilterQuestion from "./FilterQuestion";

export default function QuestionManage() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.survey.questions);
  const [openAdd, setOpenAdd] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);

  useEffect(() => {
    setFilteredQuestions(questions);
  }, [questions]);

  const handleFilterChange = (filters) => {
    const { searchTerm, category } = filters;
    let filtered = questions;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((question) =>
        question.question_text.toLowerCase().includes(searchLower)
      );
    }

    if (category) {
      filtered = filtered.filter((question) => question.category === category);
    }

    setFilteredQuestions(filtered);
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  return (
    <S.Container>
      <S.Title>Question Manage</S.Title>
      <FilterQuestion onFilterChange={handleFilterChange} />
      <S.MiddleContainer>
        <S.Description>List of manage</S.Description>
        <Button
          variant="contained"
          onClick={handleOpenAdd}
          size="large"
          color="success"
        >
          Add Question
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
            {filteredQuestions.map((question) => (
              <QuestionsRows key={question.question_id} question={question} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddQuestionModal open={openAdd} handleClose={handleCloseAdd} />
    </S.Container>
  );
}

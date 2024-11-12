import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllQuestions,
  resetSurveyState,
  updateQuestionById,
} from "../../../../store/surveySlice";
import { QUESTION_CATEGORY } from "../QuestionValue";

export default function UpdateQuestionModal({ open, handleClose, question }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.survey);

  const [questionData, setQuestionData] = useState({
    question_text: question.question_text || "",
    question_type: question.question_type || "",
    options: question.options || [],
    category: question.category || "",
    code: question.code || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = questionData.options.map((opt, i) =>
      i === index ? value : opt
    );
    setQuestionData((prev) => ({
      ...prev,
      options: updatedOptions,
    }));
  };

  const handleUpdateQuestion = (e) => {
    e.preventDefault();
    if (!isLoading) {
      dispatch(
        updateQuestionById({
          question_id: question.question_id,
          questionData,
        })
      );
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(getAllQuestions());
      dispatch(resetSurveyState());
    }
  }, [isSuccess, dispatch, handleClose]);

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
          width: 800,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6">Update Question</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <TextField
              label="Nội dung"
              name="question_text"
              fullWidth
              margin="normal"
              value={questionData.question_text}
              onChange={handleChange}
              required
            />
            <TextField
              label="Loại câu hỏi"
              name="question_type"
              fullWidth
              margin="normal"
              value={questionData.question_type}
              onChange={handleChange}
              disabled
            />
            <Typography variant="subtitle1">Tùy chọn</Typography>
            {questionData.options.map((option, index) => (
              <TextField
                key={index}
                label={`Option ${index + 1}`}
                fullWidth
                margin="normal"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
            ))}
          </Box>
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Thể loại</InputLabel>
              <Select
                name="category"
                value={questionData.category}
                onChange={handleChange}
                required
              >
                {QUESTION_CATEGORY.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Mã câu hỏi"
              name="code"
              fullWidth
              margin="normal"
              value={questionData.code}
              onChange={handleChange}
              required
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleUpdateQuestion}
          disabled={isLoading}
          sx={{ mt: 3 }}
        >
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </Box>
    </Modal>
  );
}

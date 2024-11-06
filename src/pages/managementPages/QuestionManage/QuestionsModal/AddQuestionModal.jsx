import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, resetSurveyState } from "../../../../store/surveySlice";
import { notifySuccess } from "../../../../utils/Nontification.utils";

export default function AddQuestionModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const { isLoading: isQuestionLoading, isSuccess } = useSelector(
    (state) => state.survey
  );

  const [questionData, setQuestionData] = useState({
    question_text: "",
    question_type: "",
    options: [],
    category: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      dispatch(resetSurveyState());

      // Reset dữ liệu câu hỏi
      setQuestionData({
        question_text: "",
        type: "",
        options: [],
        category: "",
        code: "",
      });
    }
  }, [isSuccess, dispatch, handleClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuestion(questionData));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" mb={2}>
          Thêm Câu Hỏi Mới
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            name="question_text"
            label="Câu hỏi"
            value={questionData.question_text}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="question_type"
            label="Loại"
            value={questionData.question_type}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="options"
            label="Tùy chọn (cách nhau bằng dấu phẩy)"
            value={questionData.options.join(",")} // Hiển thị tùy chọn dưới dạng chuỗi
            onChange={(e) =>
              handleChange({
                target: {
                  name: "options",
                  value: e.target.value.split(","), // Chuyển đổi chuỗi thành mảng
                },
              })
            }
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="category"
            label="Danh mục"
            value={questionData.category}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="code"
            label="Mã"
            value={questionData.code}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isQuestionLoading}
            sx={{ mt: 3 }}
          >
            {isQuestionLoading ? "Đang thêm..." : "Thêm"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";

const initialState = {
    questions: [],
    recommendedProducts: [],
    response: [],
    isLoading: false,
    isSuccess: false,
    error: null,
    message: "",
}

// Get all questions
export const getAllQuestions = createAsyncThunk(
    'survey/getAllQuestions',
    async () => {
        const response = await instanceAxios.get('/api/surveys/1/questions');
        return response.data;
    }
);

//Submit Questions 
export const submitSurveyReponses = createAsyncThunk(
    "survey/SubmitSurveyReponses",
    async(responses, {rejectWithValue}) => {
        try {
            const formattedResponses = responses.map(([code, answer]) => ({
                code,
                answer,
              }));

              const response = await instanceAxios.post(`/api/surveys/1/responses`, {
                responses: formattedResponses,
              });
              notifySuccess(response.data.message);
              return response.data; 
        
        } catch (error) {
            notifyError(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

//Get all responses by user Id
export const getResponsesByUser = createAsyncThunk(
    "survey/getAllResponses",
    async() => {
        const response = await instanceAxios.get(`/api/responses/my`);
        return response.data;
    }
);

//Update Survey Responses
export const updateSurveyResponses = createAsyncThunk(
    "survey/updateResponses",
    async (responses) => {
      const response = await instanceAxios.put("/api/surveys/1/responses", { responses });
     
      return response.data; 
    }
  );

//Get all recommended products
export const getRecommendedProducts = createAsyncThunk(
    "survey/getRecommendedProducts",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instanceAxios.get(`/api/responses/recommend`);
            return response.data;
        } catch (error) {
            notifyError(error.response.data.message);
            return rejectWithValue(error.response.data);

        }
    }
);

//Add Question by Admin
export const addQuestion = createAsyncThunk(
    "survey/addQuestion",
    async (questionData, { rejectWithValue }) => {
        try {
            const response = await instanceAxios.post(`/api/manager/surveys/1/questions`, questionData);
            notifySuccess("Question added successfully");
            return response.data;
        } catch (error) {
            notifyError(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);
            

//Update Question by Admin
export const updateQuestionById = createAsyncThunk(
    "survey/updateQuestionById",
    async ({ question_id, questionData }, { rejectWithValue }) => {
        try {
            const response = await instanceAxios.put(`/api/manager/surveys/1/questions/${question_id}`, questionData);
            notifySuccess(response.data.message);
            return response.data;
        } catch (error) {
            notifyError(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

//Delete Question by Admin
export const deleteQuestionById = createAsyncThunk(
    "survey/deleteQuestionById",
    async (question_id, { rejectWithValue }) => {
        try {
            const response = await instanceAxios.delete(`/api/manager/surveys/1/questions/${question_id}`);
            notifySuccess(response.data.message);
            return response.data;
        } catch (error) {
            notifyError(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

const surveySlice = createSlice({
name: "survey",
initialState,
reducers: {
    resetSurveyState: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = null;
        state.message = "";
        state.response = [];
    },
    resetUpdateSurveyState: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
    }
},
extraReducers: (builder) => {
    // Get all questions
    builder.addCase(getAllQuestions.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getAllQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
    });
    builder.addCase(getAllQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });

    // Submit survey responses
    builder.addCase(submitSurveyReponses.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(submitSurveyReponses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recommendedProducts = action.payload;
    });
    builder.addCase(submitSurveyReponses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });

    // Get all responses by user Id
    builder.addCase(getResponsesByUser.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getResponsesByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
    });
    builder.addCase(getResponsesByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });

    // Update survey responses
    builder.addCase(updateSurveyResponses.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(updateSurveyResponses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recommendedProducts = action.payload;
    });
    builder.addCase(updateSurveyResponses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });

    // Get all recommended products
    builder.addCase(getRecommendedProducts.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getRecommendedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommendedProducts = action.payload;
    });
    builder.addCase(getRecommendedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });


    // Add Question by Admin
    builder.addCase(addQuestion.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(addQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions.push(action.payload);
    });
    builder.addCase(addQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });

    // Update Question by Admin
    builder.addCase(updateQuestionById.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(updateQuestionById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const updatedQuestion = action.payload; 
        state.questions = state.questions.map((question) =>
            question.question_id === updatedQuestion.question_id
                ? { ...question, ...updatedQuestion }
                : question
        );
    });
    builder.addCase(updateQuestionById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });

    // Delete Question by Admin
    builder.addCase(deleteQuestionById.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(deleteQuestionById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const deletedQuestionId = action.meta.arg;
        state.questions = state.questions.filter(
            (question) => question.question_id !== deletedQuestionId
        );
    });
    builder.addCase(deleteQuestionById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });
}
})


export const { resetSurveyState, resetUpdateSurveyState } = surveySlice.actions;
export default surveySlice;
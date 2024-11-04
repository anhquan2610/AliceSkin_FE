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
      return response.data; // Dữ liệu trả về từ API
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
}
})


export const { resetSurveyState, resetUpdateSurveyState } = surveySlice.actions;
export default surveySlice;
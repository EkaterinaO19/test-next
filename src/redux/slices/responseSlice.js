import {createSlice} from "@reduxjs/toolkit";

const responseSlice = createSlice({
    name: "response",
    initialState: null,
    reducers: {
        setResponseData: (state, action) => {
            state.response = action.payload;
        }
    }
})

export const responseReducer = responseSlice.reducer;

export const {setResponseData} = responseSlice.actions;
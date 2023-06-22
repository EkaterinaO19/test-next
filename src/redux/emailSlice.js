import {createSlice} from "@reduxjs/toolkit";

const emailSlice = createSlice({
    name: "email",
    initialState: "",
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload; // Update the email field in the state
        },
    }
})

export const emailReducer = emailSlice.reducer;

export const {updateEmail} = emailSlice.actions
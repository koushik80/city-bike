//https://redux-toolkit.js.org/api/createSlice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: undefined,
    page: 1
}

//CREATED FILTER SLICE
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        search: (state, action) => {
            state.search = action.payload;
        },
        reset: (state, action) => {
            state.search = undefined;
        },
        pagination: (state, action) => {
            state.page = action.payload;
        }
    },

});

export const { search, reset, pagination } = filterSlice.actions;
export default filterSlice.reducer;
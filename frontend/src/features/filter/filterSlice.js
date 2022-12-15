//https://redux-toolkit.js.org/api/createSlice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: undefined,
    page: 1,
    journeyPage: 1,
    journeySearch: undefined
}

//CREATED FILTER SLICE
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        search: (state, action) => {
            state.search = action.payload;
        },
        journeySearch: (state, action) => {
            state.journeySearch = action.payload;
        },
        reset: (state, action) => {
            state.search = undefined;
        },
        pagination: (state, action) => {
            state.page = action.payload;
        },
        journeyPagination: (state, action) => {
            state.journeyPage = action.payload;
        }
    },
});

export const { search, reset, pagination, journeyPagination, journeySearch } = filterSlice.actions;
export default filterSlice.reducer;
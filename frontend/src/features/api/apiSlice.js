//doc: https://redux-toolkit.js.org/rtk-query/overview

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
    baseUrl: `http://localhost:8080/api`,
    prepareHeaders: async (headers, {getState, endpoint}) => {

    }
});


const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);

        return result;
    },
    tagTypes: [],
    endpoints: (builder) => ({

    }),
});

export default apiSlice;
//doc:
// https://redux-toolkit.js.org/rtk-query/usage/queries
//https://redux-toolkit.js.org/rtk-query/usage/mutations

import apiSlice from "../api/apiSlice";

// INJECT END WITH API SLICE
export const stationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStations: builder.query({
            query: (url) => `/station/all${url}`
        }),
        getStationDetails: builder.query({
            query: (id) => `/station/${id}`
        }),
        addStation: builder.mutation({
            query: ({data, url}) => ({
                url: '/station/create',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {

            }
        }),
        deleteStation: builder.mutation({
            query: ({id, url}) => ({
                url: `/station/${id}`,
                method: 'DELETE'
            }), async onQueryEnded(arg, {queryFulfilled, dispatch}) {

            }
        })
    })
});

export const {useAddStationMutation, useDeleteStationMutation, useGetStationDetailsQuery, useGetStationsQuery} = stationApi;
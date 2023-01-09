//doc:
// https://redux-toolkit.js.org/rtk-query/usage/queries
//https://redux-toolkit.js.org/rtk-query/usage/mutations

import apiSlice from '../api/apiSlice'

// INJECT END POINTS WITH API SLICE
export const journeyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJourney: builder.query({
      query: (url) => `/journey/all${url}`
    }),
    addJourney: builder.mutation({
      query: ({ data, arg }) => ({
        url: '/journey/create',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {

      }
    }),
    deleteJourney: builder.mutation({
      query: ({ id, url }) => ({
        url: `/journey/${id}`,
        method: 'DELETE'
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {

      }
    })
  })
})

export const { useAddJourneyMutation, useDeleteJourneyMutation, useGetJourneyQuery } = journeyApi
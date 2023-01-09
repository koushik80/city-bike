// https://redux-toolkit.js.org/rtk-query/overview

import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../features/api/apiSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})
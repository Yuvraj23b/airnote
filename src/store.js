import { configureStore } from '@reduxjs/toolkit'
import NotReducer from './NotSlice'

export const store = configureStore({
  reducer: {
      Not: NotReducer,
  },
})
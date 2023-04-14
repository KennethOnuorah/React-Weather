import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./slices/search"
import resultsReducer from "./slices/results"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    results: resultsReducer
  }
})
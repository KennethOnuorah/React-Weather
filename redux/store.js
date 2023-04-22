import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./slices/search"
import forecastReducer from "./slices/forecast"
import quoteReducer from "./slices/quote"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    forecast: forecastReducer,
    quote: quoteReducer
  }
})
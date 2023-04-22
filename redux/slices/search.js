import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchInput: "",
  searchQuery: "",
  isQuerySubmitted: false,
  temperatureUnit: "fahrenheit",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload
    },
    clearSearchInput: (state) => {
      state.searchInput = ""
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    clearSearchQuery: (state) => {
      state.searchQuery = ""
    },
    setQuerySubmitted: (state, action) => {
      state.isQuerySubmitted = action.payload
    },
    toggleTemperatureUnit: (state) => {
      state.temperatureUnit = state.temperatureUnit == "fahrenheit" ? "celsius" : "fahrenheit"
    },
  }
})

export const { 
  setSearchInput, 
  clearSearchInput, 
  setSearchQuery,
  clearSearchQuery,
  setQuerySubmitted,
  toggleTemperatureUnit
} = searchSlice.actions
export default searchSlice.reducer
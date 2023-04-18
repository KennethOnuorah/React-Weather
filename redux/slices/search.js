import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchInput: "",
  searchQuery: "",
  isQuerySubmitted: false
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
    }
  }
})

export const { 
  setSearchInput, 
  clearSearchInput, 
  setSearchQuery,
  clearSearchQuery,
  setQuerySubmitted 
} = searchSlice.actions
export default searchSlice.reducer
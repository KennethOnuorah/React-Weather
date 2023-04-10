import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchInput: "",
  searchQuery: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  }
})

export const { setSearchInput, setSearchQuery } = searchSlice.actions
export default searchSlice.reducer
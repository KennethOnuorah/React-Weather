import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isViewingResults: false,
  hasResults: false
}

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setIsViewingResults: (state, action) => {
      state.isViewingResults = action.payload
    },
    setHasResults: (state, action) => {
      state.hasResults = action.payload
    }
  }
})

export const { setIsViewingResults, setHasResults } = resultsSlice.actions
export default resultsSlice.reducer
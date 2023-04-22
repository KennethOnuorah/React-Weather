import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quote: {
    text: "",
    author: ""
  }
}

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = {...action.payload}
    }
  }
})

export const { setQuote } = quoteSlice.actions
export default quoteSlice.reducer
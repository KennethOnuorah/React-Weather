import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isForecastReceived: false,
  forecastData: {}
}

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setForecastReceived: (state, action) => {
      state.isForecastReceived = action.payload
    },
    setForecastData: (state, action) => {
      state.forecastData = {...action.payload}
    }
  }
})

export const { setForecastReceived, setForecastData } = forecastSlice.actions
export default forecastSlice.reducer
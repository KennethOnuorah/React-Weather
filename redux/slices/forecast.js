import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  forecastData: {},
  hourlyPredictions: [],
  dailyPredictions: [],
  isForecastReceived: false,
  background: "",
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
    },
    setHourlyPredictions: (state, action) => {
      state.hourlyPredictions = [...action.payload]
    },
    setDailyPredictions: (state, action) => {
      state.dailyPredictions = [...action.payload]
    },
    setBackground: (state, action) => {
      state.background = action.payload
    }
  }
})

export const { 
  setForecastReceived, 
  setForecastData, 
  setHourlyPredictions,
  setDailyPredictions,
  setBackground
} = forecastSlice.actions
export default forecastSlice.reducer
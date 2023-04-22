import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  forecastData: {},
  hourlyPredictions: [],
  dailyPredictions: [],
  isForecastReceived: false,
  temperatureUnit: "fahrenheit",
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
    toggleTemperatureUnit: (state) => {
      state.temperatureUnit = state.temperatureUnit == "fahrenheit" ? "celsius" : "fahrenheit"
    },
    setHourlyPredictions: (state, action) => {
      state.hourlyPredictions = [...action.payload]
    },
    setDailyPredictions: (state, action) => {
      state.dailyPredictions = [...action.payload]
    }
  }
})

export const { 
  setForecastReceived, 
  setForecastData, 
  toggleTemperatureUnit, 
  setHourlyPredictions,
  setDailyPredictions
} = forecastSlice.actions
export default forecastSlice.reducer
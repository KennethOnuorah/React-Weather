import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  forecastData: {},
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
    }
  }
})

export const { setForecastReceived, setForecastData, toggleTemperatureUnit } = forecastSlice.actions
export default forecastSlice.reducer
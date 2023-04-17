import axios from 'axios'
import { useUpdateEffect } from 'react-use'
import { useSelector, useDispatch } from 'react-redux'
import { setForecastData, setForecastReceived } from '../redux/slices/forecast'

import { GEOCODE_BASE_URL, FORECAST_BASE_URL, FORECAST_REMAINING_URL } from './helpers/baseURLs'

import Search from './components/Search/Search'
import Background from './components/Background/Background'
import Forecasts from './components/Forecasts/Forecasts'
import Quote from './components/Quote/Quote'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const locationSearch = useSelector(state => state.search.searchQuery)
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)

  useUpdateEffect(() => {
    const fetchForecast = async() => {
      if(locationSearch === "") return
      dispatch(setForecastReceived(false))
      const geolocation = await axios.get(`${GEOCODE_BASE_URL}${locationSearch}`)
      const [lat, lon] = [geolocation.data[0].lat, geolocation.data[0].lon]
      const forecast = await axios.get(`${FORECAST_BASE_URL}latitude=${lat}&longitude=${lon}${FORECAST_REMAINING_URL}`)
      dispatch(setForecastReceived(true))
      dispatch(setForecastData(forecast.data))
      console.log(forecast.data)
    }
    fetchForecast()
  }, [locationSearch])

  return (
    <div className="App">
      <Background/>
      <Search/>
      <div
        className="searchResults"
        style={{
          animation: isForecastReceived ? "openResults 0.3s forwards" : "closeResults 0.3s forwards",
        }}
      >
        <Forecasts/>
        <Quote quote={"Strive not to be a success, but to be of value"} name={"Albert Einstein"}/>
      </div>
    </div>
  )
}

export default App

import axios from 'axios'
import { useEffect } from 'react'
import { useUpdateEffect } from 'react-use'
import { useSelector, useDispatch } from 'react-redux'
import { setForecastData, setForecastReceived } from '../redux/slices/forecast'
import { setQuote } from '../redux/slices/quote'

import { GEOCODE_BASE_URL, FORECAST_BASE_URL, apiForecastParams } from './helpers/baseURLs'

import Search from './components/Search/Search'
import Background from './components/Background/Background'
import Forecasts from './components/Forecasts/Forecasts'
import Quote from './components/Quote/Quote'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const locationSearch = useSelector(state => state.search.searchQuery)
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const temperatureUnit = useSelector(state => state.forecast.temperatureUnit)
  const quote = useSelector(state => state.quote.quote)

  useUpdateEffect(() => {
    const fetchForecast = async() => {
      if(locationSearch === "") return
      dispatch(setForecastReceived(false))
      const geolocation = await axios.get(`${GEOCODE_BASE_URL}${locationSearch}`)
      const [lat, lon] = [geolocation.data[0].lat, geolocation.data[0].lon]
      const forecast = await axios.get(`${FORECAST_BASE_URL}${apiForecastParams(lat, lon, temperatureUnit)}`)
      dispatch(setForecastReceived(true))
      dispatch(setForecastData(forecast.data))
      console.log(forecast.data)
    }
    fetchForecast()
  }, [locationSearch])

  useEffect(() => {
    const fetchQuote = async() => {
      const response = await axios.get("https://type.fit/api/quotes")
      const randomQuote = response.data[Math.floor(Math.random() * Math.random() * 1653)]
      dispatch(setQuote({...randomQuote}))
    }
    fetchQuote()
  }, [])

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
      </div>
      <Quote quote={quote.text} person={quote.author}/>
    </div>
  )
}

export default App

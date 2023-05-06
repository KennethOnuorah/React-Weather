import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { setForecastData, setForecastReceived } from "../../redux/slices/forecast"

import { GEOCODE_BASE_URL, FORECAST_BASE_URL, forecastURLParams } from "../helpers/baseURLs"

const useForecast = (location, deps=[]) => {
  const dispatch = useDispatch()
  const [searchParams,] = useSearchParams()
  const temperatureUnit = useSelector(state => state.search.temperatureUnit)

  useEffect(() => {
    const fetchForecast = async() => {
      if(location === "" && !searchParams.get("q")) return
      dispatch(setForecastReceived(false))
      location = searchParams.get("q")
      const geolocation = await axios.get(`${GEOCODE_BASE_URL}${location}`)
      const [lat, lon] = [geolocation.data[0].lat, geolocation.data[0].lon]
      const forecast = await axios.get(`${FORECAST_BASE_URL}${forecastURLParams(lat, lon, temperatureUnit)}`)
      dispatch(setForecastReceived(true))
      dispatch(setForecastData(forecast.data))
    }
    fetchForecast()
  }, deps)
}

export default useForecast

import axios from 'axios'
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { setForecastData, setForecastReceived } from "../../redux/slices/forecast"

import { GEOCODE_URL_BASE, FORECAST_URL_BASE, forecastURLParams } from "../helpers/baseURLs"

const useForecast = (location, deps=[]) => {
  const dispatch = useDispatch()
  const [searchParams,] = useSearchParams()
  const temperatureUnit = searchParams.get("unit")

  useEffect(() => {
    const fetchForecast = async() => {
      try {
        if(location === "" && !searchParams.get("q")) return
        dispatch(setForecastReceived(false))
        location = searchParams.get("q")
        const geolocation = await axios.get(`${GEOCODE_URL_BASE}${location}`)
        const [lat, lon] = [geolocation.data[0].lat, geolocation.data[0].lon]
        const forecast = await axios.get(`${FORECAST_URL_BASE}${forecastURLParams(lat, lon, temperatureUnit)}`)
        dispatch(setForecastReceived(true))
        dispatch(setForecastData(forecast.data))  
      } catch (e) {
        dispatch(setForecastData({}))
        dispatch(setForecastReceived(true))
        console.error(e)
      }
    }
    fetchForecast()
  }, deps)
}

export default useForecast

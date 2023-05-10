import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setHourlyPredictions } from '../../../../../redux/slices/forecast'
import { getHourlyPredictions } from '../../../../utils/getHourlyPredictions'

import Prediction from '../Prediction/Prediction'

import "./Hourly.css"

const Hourly = () => {
  const dispatch = useDispatch()
  const summaryRef = useRef()
  const [searchParams,] = useSearchParams()
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const forecastData = useSelector(state => state.forecast.forecastData)
  const forecastDataEntriesLength = Object.entries(forecastData).length
  const temperatureUnit = searchParams.get("unit")
  const predictions = useSelector(state => state.forecast.hourlyPredictions)

  useEffect(() => {
    if(!isForecastReceived) return
    summaryRef.current.scrollLeft = 0
    dispatch(setHourlyPredictions(getHourlyPredictions(
      forecastData.hourly.time.indexOf(forecastData.current_weather.time),
      forecastData.hourly.time,
      forecastData.hourly.temperature_2m,
      forecastData.hourly.weathercode
    )))
  }, [isForecastReceived, forecastDataEntriesLength])

  return (
    <article
      className="hourlyContainer"
      style={{
        color: isForecastReceived ? "white" : "transparent",
      }}
    >
      Your forecast for the rest of today.
      <div
        className="predictionSummary"
        ref={summaryRef}
        style={{
          display: isForecastReceived ? "grid" : "none",
        }}
      >
        {predictions.map((p) => 
          <Prediction 
            key={predictions.indexOf(p)+p.time}
            time={p.time} 
            temperature={Math.round(p.temperature)}
            temperatureUnit={temperatureUnit}
            weatherCode={p.weatherCode}
            isHourly={true}
          />
        )}
      </div>
    </article>
  )
}

export default Hourly

import { useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { setDailyPredictions } from "../../../../../redux/slices/forecast"
import { getDailyPredictions } from "../../../../utils/getDailyPredictions"

import Prediction from '../Prediction/Prediction'

import "./Daily.css"

const Daily = () => {
  const dispatch = useDispatch()
  const summaryRef = useRef()
  const [searchParams,] = useSearchParams()
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const forecastData = useSelector(state => state.forecast.forecastData)
  const forecastDataEntriesLength = Object.entries(forecastData).length
  const temperatureUnit = searchParams.get("unit")
  const predictions = useSelector(state => state.forecast.dailyPredictions)

  useEffect(() => {
    if(!isForecastReceived) return
    summaryRef.current.scrollLeft = 0
    dispatch(setDailyPredictions(getDailyPredictions(
      forecastData.daily.time,
      forecastData.daily.temperature_2m_max,
      forecastData.daily.weathercode
    )))
  }, [isForecastReceived, forecastDataEntriesLength])

  return (
    <article 
      className="dailyContainer"
      style={{
        color: isForecastReceived ? "white" : "transparent"
      }}
    >
      Your forecast for the next several days.
      <div 
        className="predictionSummary"
        ref={summaryRef}
        style={{
          display: isForecastReceived ? "grid" : "none"
        }}
      >
        {predictions.filter((p) => predictions.indexOf(p) !== 0).map((p) => 
          <Prediction 
            key={predictions.indexOf(p)+p.time}
            time={p.time} 
            temperature={Math.round(p.temperature)} 
            temperatureUnit={temperatureUnit} 
            weatherCode={p.weatherCode} 
            isHourly={false}
          />
        )}
      </div>
    </article>
  )
}

export default Daily

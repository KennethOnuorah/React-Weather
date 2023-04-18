import { useSelector } from 'react-redux'
import Property from './Property/Property'

import * as deg2dir from 'degrees-to-direction'
import { generateWeatherDescription } from '../../../utils/generateDescription'
import { weatherCodes } from '../../../helpers/weatherCodes'
import { getUVIndexCategory } from '../../../helpers/uvIndexRange'

import "./Now.css"

const Now = () => {
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const temperatureUnit = useSelector(state => state.forecast.temperatureUnit)
  const forecastData = useSelector(state => state.forecast.forecastData)
  const forecastDataKey = Object.keys(weatherCodes).filter(k => k.split(',').map(Number).includes(forecastData.current_weather?.weathercode))

  const getPropertyValue = (property) => {
    const index = forecastData.hourly?.time.indexOf(forecastData.current_weather?.time)
    return forecastData.hourly[property][index]
  }

  const getWeatherType = () => {
    return (
      <>
        {forecastData.current_weather?.is_day == 1 ? 
          weatherCodes[forecastDataKey[0]]?.dayIcon :
          weatherCodes[forecastDataKey[0]]?.nightIcon
        }
        {weatherCodes[forecastDataKey[0]]?.type}
      </>
    )
  }
  
  return (
    <article 
      className="nowContainer"
      style={{
        color: isForecastReceived ? "white" : "transparent"
      }}
    >
      {isForecastReceived && 
        generateWeatherDescription(
          weatherCodes[forecastDataKey[0]]?.type,
          forecastData.current_weather?.temperature,
          temperatureUnit,
          forecastData.current_weather?.windspeed,
          getPropertyValue("precipitation_probability")
      )}
      <section 
        className="weatherForecast"
        style={{display: isForecastReceived ? "flex" : "none"}}
      >
        <div className='mainResults'>
          <div className="card" id='temperature'>
            Feels like...
            <div className="degrees">
              {Math.round(forecastData.current_weather?.temperature)}° F
            </div>
          </div>
          <div className="card" id='weatherType'>
            {getWeatherType()}
          </div>
        </div>
        {isForecastReceived &&
          <div className="card" id='miscellaneousResults'>
            <Property title='Humidity' amount={getPropertyValue("relativehumidity_2m")} unitType='%'/>
            <Property title='Precipitation' amount={getPropertyValue("precipitation_probability")} unitType='%'/>
            <Property title='Wind Speed' amount={forecastData.current_weather?.windspeed} unitType=' mph'/>
            <Property title='Wind Direction' amount={deg2dir(forecastData.current_weather?.winddirection)} unitType=''/>
            <Property title='Pressure' amount={getPropertyValue("surface_pressure")} unitType=' hPa'/>
            <Property title='Visibility' amount={Math.round(getPropertyValue("visibility") / 1069)} unitType=' mi'/>
            <Property title='Dew Point' amount={Math.round(getPropertyValue("dewpoint_2m"))} unitType='° F'/>
            <Property title='UV Index' amount={getUVIndexCategory(Math.round(getPropertyValue("uv_index")))} unitType=''/>
          </div>
        }
      </section>
    </article>
  )
}

export default Now

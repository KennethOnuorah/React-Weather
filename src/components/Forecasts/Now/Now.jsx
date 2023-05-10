import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Property from './Property/Property'

import * as deg2dir from 'degrees-to-direction'
import { generateWeatherDescription } from '../../../utils/generateDescription'
import { weatherCodes } from '../../../helpers/weatherCodes'
import { getUVIndexCategory } from '../../../helpers/uvIndexRange'

import { MdOutlineWaterDrop as HumidIcon, MdDewPoint as DewIcon } from 'react-icons/md'
import { GiHeavyRain as PrecipIcon } from 'react-icons/gi'
import { FiWind as WindSpeedIcon } from 'react-icons/fi'
import { SlCompass as WindDirIcon, SlEye as VisibilityIcon } from 'react-icons/sl'
import { ImMeter as PressureIcon } from 'react-icons/im'
import { TbUvIndex as UVIcon } from 'react-icons/tb'

import "./Now.css"

const Now = () => {
  const [searchParams,] = useSearchParams()
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const temperatureUnit = searchParams.get("unit")
  const forecastData = useSelector(state => state.forecast.forecastData)
  const weatherCodeKey = Object.keys(weatherCodes).filter(k => k.split(',').map(Number).includes(forecastData.current_weather?.weathercode))

  const getPropertyValue = (property) => {
    const index = forecastData.hourly?.time.indexOf(forecastData.current_weather?.time)
    return forecastData.hourly[property][index]
  }

  const getWeatherType = () => {
    return (
      <>
        {forecastData.current_weather?.is_day == 1 ? 
          weatherCodes[weatherCodeKey[0]]?.dayIcon :
          weatherCodes[weatherCodeKey[0]]?.nightIcon}
        {weatherCodes[weatherCodeKey[0]]?.type}
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
          weatherCodes[weatherCodeKey[0]]?.type,
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
              {Math.round(forecastData.current_weather?.temperature)}° {temperatureUnit === "fahrenheit" ? 'F' : 'C'}
            </div>
          </div>
          <div className="card" id='weatherType'>
            {getWeatherType()}
          </div>
        </div>
        {isForecastReceived &&
          <div className="card" id='miscellaneousResults'>
            <Property title='Humidity' amount={getPropertyValue("relativehumidity_2m")} unitType='%' icon={<HumidIcon size={25}/>}/>
            <Property title='Precipitation' amount={getPropertyValue("precipitation_probability")} unitType='%' icon={<PrecipIcon size={25}/>}/>
            <Property title='Wind Speed' amount={forecastData.current_weather?.windspeed} unitType=' mph' icon={<WindSpeedIcon size={25}/>}/>
            <Property title='Wind Direction' amount={deg2dir(forecastData.current_weather?.winddirection)} unitType='' icon={<WindDirIcon size={25}/>}/>
            <Property title='Pressure' amount={getPropertyValue("surface_pressure")} unitType=' hPa' icon={<PressureIcon size={25}/>}/>
            <Property title='Visibility' amount={Math.round(getPropertyValue("visibility") / 1069)} unitType=' mi' icon={<VisibilityIcon size={25}/>}/>
            <Property title='Dew Point' amount={Math.round(getPropertyValue("dewpoint_2m"))} unitType={`° ${temperatureUnit === "fahrenheit" ? `F` : 'C'}`} icon={<DewIcon size={35}/>}/>
            <Property title='UV Index' amount={getUVIndexCategory(Math.round(getPropertyValue("uv_index")))} unitType='' icon={<UVIcon size={35}/>}/>
          </div>
        }
      </section>
    </article>
  )
}

export default Now

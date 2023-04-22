import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { weatherCodes } from '../../../../helpers/weatherCodes'
import { getStandardTime } from '../../../../utils/getStandardTime'
import { getDay } from '../../../../utils/getDay'

import "./Prediction.css"

const Prediction = ({time, temperature, temperatureUnit, weatherCode, isHourly}) => {
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const weatherCodeKey = Object.keys(weatherCodes).filter(k => k.split(',').map(Number).includes(weatherCode))

  const isNight = (hour) => ((20 <= hour && hour <= 23) || (0 <= hour && hour <= 7))

  return (
    <section className='prediction'>
      <div className="predictionTitle">
        {isHourly ? getStandardTime(time) : getDay(time)}
        <hr/>
      </div>
      <div className="predictionTemperature">
        {temperature}°{temperatureUnit === "fahrenheit" ? "F" : "C"}
      </div>
      {(isForecastReceived && isHourly) && 
        isNight(time.split(':')[0] == "00" ? 0 : JSON.parse(time.split(':')[0].replace(/^0+/, ''))) ?
          weatherCodes[weatherCodeKey[0]]?.nightIcon :
          weatherCodes[weatherCodeKey[0]]?.dayIcon
      }
    </section>
  )
}

Prediction.propTypes = {
  time: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  temperatureUnit: PropTypes.string.isRequired,
  weatherCode: PropTypes.number.isRequired,
  isHourly: PropTypes.bool.isRequired
}

export default Prediction

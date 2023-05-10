import { useSelector } from 'react-redux'

import Now from './Now/Now'
import Hourly from './Predictions/Hourly/Hourly'
import Daily from './Predictions/Daily/Daily'
import NoResults from './NoResults/NoResults'

const Forecasts = () => {
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const forecastData = useSelector(state => state.forecast.forecastData)
  const forecastDataEntriesLength = Object.entries(forecastData).length

  return (
    <>
      {
      isForecastReceived && 
        forecastDataEntriesLength > 0 ?
          <>
            <Now/>
            <Hourly/>
            <Daily/>
          </> : 
          <NoResults/>
      }
    </>
  )
}

export default Forecasts

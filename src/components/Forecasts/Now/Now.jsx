import { useSelector } from 'react-redux'
import Property from './Property/Property'
import { WiDaySunny as SunnyIcon } from 'react-icons/wi'

import "./Now.css"

const Now = () => {
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)

  return (
    <article 
      className="nowContainer"
      style={{
        color: isForecastReceived ? "white" : "transparent"
      }}
    >
      {/* For example: Sunny skies and warm temperatures of up to 86° F, with winds traveling NNE at 5 to 10 mph. */}
      [General weather description here]
      <section 
        className="weatherForecast"
        style={{display: isForecastReceived ? "flex" : "none"}}
      >
        <div className='mainResults'>
          <div className="card" id='temperature'>
            Feels like...
            <div className="degrees">
              0° F
            </div>
          </div>
          <div className="card" id='weatherType'>
            <SunnyIcon size={100}/>
            Sunny 
          </div>
        </div>
        <div className="card" id='miscellaneousResults'>
          <Property title='Humidity' amount={0} unitType='%'/>
          <Property title='Precipitation' amount={0} unitType='%'/>
          <Property title='Wind Speed' amount={0} unitType=' mph'/>
          <Property title='Wind Direction' amount={"NNE"} unitType=''/>
          <Property title='Pressure' amount={0} unitType=' hPa'/>
          <Property title='Visibility' amount={0} unitType=' mi'/>
          <Property title='Dew Point' amount={0} unitType='° F'/>
          <Property title='UV Index' amount={"Low"} unitType=''/>
        </div>
      </section>
    </article>
  )
}

export default Now

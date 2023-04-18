import { useSelector } from 'react-redux'
import DayCard from '../Week/DayCard/DayCard'
import { WiDaySunny as SunnyIcon } from 'react-icons/wi'

import "./Today.css"

const Today = () => {
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)

  return (
    <article 
      className="todayContainer"
      style={{
        color: isForecastReceived ? "white" : "transparent"
      }}
    >
      Your forecast for the rest of the day.
      <div 
        className="forecastSummary"
        style={{
          display: isForecastReceived ? "grid" : "none"
        }}
      >
        <DayCard dayName="0:00 AM" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="0:00 AM" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="0:00 AM" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="0:00 AM" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="0:00 AM" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="0:00 AM" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
      </div>
    </article>
  )
}

export default Today

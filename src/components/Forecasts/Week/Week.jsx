import { useSelector } from "react-redux"
import DayCard from "./DayCard/DayCard"
import { WiDaySunny as SunnyIcon } from 'react-icons/wi'

import "./Week.css"

const Week = () => {
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  
  return (
    <article 
      className="weekContainer"
      style={{
        color: isForecastReceived ? "white" : "transparent"
      }}
    >
      Your forecast for the next several days.
      <div 
        className="forecastSummary"
        style={{
          display: isForecastReceived ? "grid" : "none"
        }}
      >
        <DayCard dayName="Tuesday" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="Wednesday" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="Thursday" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="Friday" temperature={0} weatherIcon={<SunnyIcon size={100}/>}/>
      </div>
    </article>
  )
}

export default Week

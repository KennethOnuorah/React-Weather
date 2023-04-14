import DayCard from "./DayCard/DayCard"
import { WiDaySunny as SunnyIcon } from 'react-icons/wi'

import "./Week.css"

const Week = () => {
  return (
    <article className="week">
      Your forecast for the next several days.
      <div className="dayCards">
        <DayCard dayName="Tuesday" temperature={78} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="Wednesday" temperature={84} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="Thursday" temperature={87} weatherIcon={<SunnyIcon size={100}/>}/>
        <DayCard dayName="Friday" temperature={88} weatherIcon={<SunnyIcon size={100}/>}/>
      </div>
    </article>
  )
}

export default Week

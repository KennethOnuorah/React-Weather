import React from 'react'
import PropTypes from 'prop-types'

import "./DayCard.css"

const DayCard = ({dayName, temperature, weatherIcon}) => {
  return (
    <section className='dayCard'>
      <div className="dayCardTitle">
        {dayName}
        <hr/>
      </div>
      <div className="dayCardTemperature">
        {temperature}° F
      </div>
      {weatherIcon}
    </section>
  )
}

DayCard.propTypes = {
  dayName: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherIcon: PropTypes.element.isRequired
}

export default DayCard

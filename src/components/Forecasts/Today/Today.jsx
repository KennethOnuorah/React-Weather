import { useState } from 'react'
import useViewportDimensions from '../../../hooks/useViewportDimensions'

import Property from './Property/Property'

import { WiDaySunny as SunnyIcon } from 'react-icons/wi'

import "./Today.css"

const Today = () => {
  const [isFahrenheit, setIsFahrenheit] = useState(true)
  const dimensions = useViewportDimensions()

  return (
    <article className="today">
      Sunny skies and warm temperatures of up to 86° F, with winds traveling at 5 to 10 mph.
      <section className="weather">
        {
        (575 <= dimensions.width && dimensions.width <= 1500) ?
          <div className='weatherContainer'>
            <div className="card" id='temperature'>
              Feels like...
              <div className="degrees">
                86° F
              </div>
            </div>
            <div className="card" id='weatherType'>
              <SunnyIcon size={100}/>
              Sunny 
            </div>
          </div> : 
          <>
            <div className="card" id='temperature'>
              Feels like...
              <div className="degrees">
                86° F
              </div>
            </div>
            <div className="card" id='weatherType'>
              <SunnyIcon size={100}/>
              Sunny 
            </div>
          </>
        }
        <div className="card" id='weatherProperties'>
          <Property title='Humidity' amount={40} unitType='%'/>
          <Property title='Precipitation' amount={16} unitType='%'/>
          <Property title='Pressure' amount={1013.25} unitType=' hPa'/>
          <Property title='Visibility' amount={10} unitType=' mi'/>
          <Property title='Wind Speed' amount={5} unitType=' mph'/>
          <Property title='Dew Point' amount={61} unitType='° F'/>
          <Property title='UV Index' amount={"High"} unitType=''/>
        </div>
      </section>
    </article>
  )
}

export default Today

import { useUpdateEffect } from "react-use"
import { useSelector, useDispatch } from "react-redux"

import { setBackground } from "../../../redux/slices/forecast"
import { weatherCodes } from "../../helpers/weatherCodes"

import "./Background.css"

const Background = () => {
  const dispatch = useDispatch()
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)
  const forecastData = useSelector(state => state.forecast.forecastData)
  const background = useSelector(state => state.forecast.background)
  const weatherCodeKey = Object.keys(weatherCodes).filter(k => k.split(',').map(Number).includes(forecastData.current_weather?.weathercode))

  useUpdateEffect(() => {
    if(!isForecastReceived) return
    dispatch(setBackground(weatherCodes[weatherCodeKey[0]]?.background))
  }, [isForecastReceived])

  return (
    <div 
      className="background" 
      draggable={"false"}
    >
      <div 
        className="home"
        style={{
          opacity: isForecastReceived ? 0 : 1,
          // opacity: 0
        }}
      >
        <img className="slide1" src='/images/backgrounds/homescreen/forest.png'/>
        <img className="slide2" src='/images/backgrounds/homescreen/desert.png'/>
        <img className="slide3" src='/images/backgrounds/homescreen/lake.png'/>
        <img className="slide4" src='/images/backgrounds/homescreen/mountains.png'/>
        <img className="slide5" src='/images/backgrounds/homescreen/plains.png'/>
        <img className="slide6" src='/images/backgrounds/homescreen/jungle.png' style={{
          filter: "brightness(0.6)"
        }}/>
      </div>
      <div 
        className="forecast"
        style={{
          opacity: isForecastReceived ? 1 : 0
        }}
      >
        {/* The reason why the opacity doesn't decrease smoothly is because when you press the back button, the source for the image gets removed. */}
        <img className="resultsSlide" src={background} style={{
          filter: "brightness(0.6)"
        }}/>
      </div>
    </div>
  )
}

export default Background

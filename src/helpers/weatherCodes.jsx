import * as Icons from 'react-icons/wi'

const weatherCodes = {
  "0, 1": {
    type: "Clear skies",
    dayIcon: <Icons.WiDaySunny size={100}/>,
    nightIcon: <Icons.WiNightClear size={100}/>
  },
  "2": {
    type: "Partly cloudy",
    dayIcon: <Icons.WiDayCloudy size={100}/>,
    nightIcon: <Icons.WiNightAltCloudy size={100}/>
  },
  "3": {
    type: "Cloudy",
    dayIcon: <Icons.WiCloudy size={100}/>,
    nightIcon: <Icons.WiCloudy size={100}/>
  },
  "45, 48": {
    type: "Foggy weather",
    dayIcon: <Icons.WiDayFog size={100}/>,
    nightIcon: <Icons.WiNightFog size={100}/>
  },
  "51, 53, 55, 56, 57": {
    type: "Drizzly weather",
    dayIcon: <Icons.WiDayRainMix size={100}/>,
    nightIcon: <Icons.WiNightAltRainMix size={100}/>
  },
  "61, 63, 65, 66, 67, 80, 81, 82": {
    type: "Rainy weather",
    dayIcon: <Icons.WiRain size={100}/>,
    nightIcon: <Icons.WiRain size={100}/>
  },
  "71, 73, 75, 77, 85, 86": {
    type: "Snowy weather",
    dayIcon: <Icons.WiDaySnow size={100}/>,
    nightIcon: <Icons.WiNightAltSnow size={100}/>
  },
  "95, 96, 99": {
    type: "Thunderstorms",
    dayIcon: <Icons.WiThunderstorm size={100}/>,
    nightIcon: <Icons.WiThunderstorm size={100}/>
  },
}

export { weatherCodes }
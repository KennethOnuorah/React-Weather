import * as Icons from 'react-icons/wi'

const weatherCodes = {
  "Clear skies": {
    codes: [0, 1],
    icon: <Icons.WiDaySunny size={100}/>
  },
  "Cloudy skies": {
    codes: [2, 3],
    icon: <Icons.WiCloudy size={100}/>
  },
  "Foggy weather": {
    codes:[45, 48],
    icon: <Icons.WiFog size={100}/>
  },
  "Drizzly weather": {
    codes: [51, 53, 55, 56, 57],
    icon: <Icons.WiRainMix size={100}/>
  },
  "Rainy weather": {
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    icon: <Icons.WiRain size={100}/>
  },
  "Thunderstorms": {
    codes: [95, 96, 99],
    icon: <Icons.WiThunderstorm size={100}/>
  },
  "Snowy weather": {
    codes: [71, 73, 75, 77, 85, 86],
    icon: <Icons.WiSnow size={100}/>
  }
}

export { weatherCodes }
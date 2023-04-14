import * as Icons from 'react-icons/wi'

const weatherCodes = {
  "Sunny skies": {
    codes: [0, 1],
    icon: <Icons.WiDaySunny/>
  },
  "Foggy weather": {
    codes:[45, 48],
    icon: <Icons.WiFog/>
  },
  "Cloudy weather": {
    codes: [2, 3],
    icon: <Icons.WiCloudy/>
  },
  "Drizzly weather": {
    codes: [51, 53, 55, 56, 57],
    icon: <Icons.WiRainMix/>
  },
  "Rainy weather": {
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    icon: <Icons.WiRain/>
  },
  "Thunderstorms": {
    codes: [95, 96, 99],
    icon: <Icons.WiThunderstorm/>
  },
  "Snowy weather": {
    codes: [71, 73, 75, 77, 85, 86],
    icon: <Icons.WiSnow/>
  }
}

export { weatherCodes }
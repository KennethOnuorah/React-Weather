const conjunctions = ["and", "along with", "as well as"]
const hotPrepositions = ["of", "at", "at about", "of up to", "at around"]
const coldPrepositions = ["of", "at", "as low as", "down at"]

const freezingAdjectives = ["freezing", "frozen", "chilling"]
const coldAdjectives = ["cold", "crisp"]
const mildAdjectives = ["moderate", "cool"]
const warmAdjectives = ["warm", "hot"]
const hotAdjectives = ["very hot", "scorching"]

const getTemperatureAdjective = (temp, tempUnit) => {
  if(tempUnit === "celsius"){
    switch (true) {
      case (temp < 0):
        return freezingAdjectives[Math.floor(Math.random() * freezingAdjectives.length)]
      case (0 <= temp && temp < 10):
        return coldAdjectives[Math.floor(Math.random() * coldAdjectives.length)]
      case (10 <= temp && temp < 23):
        return mildAdjectives[Math.floor(Math.random() * mildAdjectives.length)]
      case (23 <= temp && temp < 27):
        return warmAdjectives[Math.floor(Math.random() * warmAdjectives.length)]
      case (temp >= 27):
        return hotAdjectives[Math.floor(Math.random() * hotAdjectives.length)]
      default:
        break;
    }
  }else{
    switch (true) {
      case (temp < 32):
        return freezingAdjectives[Math.floor(Math.random() * freezingAdjectives.length)]
      case (0 <= temp && temp < 50):
        return coldAdjectives[Math.floor(Math.random() * coldAdjectives.length)]
      case (50 <= temp && temp < 73):
        return mildAdjectives[Math.floor(Math.random() * mildAdjectives.length)]
      case (73 <= temp && temp < 81):
        return warmAdjectives[Math.floor(Math.random() * warmAdjectives.length)]
      case (temp >= 81):
        return hotAdjectives[Math.floor(Math.random() * hotAdjectives.length)]
      default:
        break;
    }
  }
}

const generateWeatherDescription = (weatherType, temp, tempUnit, windSpeed, precipProb) => {
  return `${weatherType} 
    ${conjunctions[Math.floor(Math.random() * conjunctions.length)]} 
    ${getTemperatureAdjective(temp, tempUnit)} temperatures 
    ${tempUnit == "fahrenheit" ?
        (temp < 40 ? coldPrepositions[Math.floor(Math.random() * coldPrepositions.length)] : hotPrepositions[Math.floor(Math.random() * hotPrepositions.length)]) :
        (temp < 13 ? coldPrepositions[Math.floor(Math.random() * coldPrepositions.length)] : hotPrepositions[Math.floor(Math.random() * hotPrepositions.length)])}     
    ${Math.round(temp)}${tempUnit == "fahrenheit" ? "°F" : "°C"}, with winds traveling at ${Math.round(windSpeed)} mph${precipProb > 0 ? " and a " + precipProb + "% chance of precipitation." : "."}`
    
}

export { generateWeatherDescription }
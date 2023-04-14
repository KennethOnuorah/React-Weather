/**
 * @param {Number} tempInput 
 * @param {String} tempInputUnits
 */
export default function convertTemperature(tempInput, tempInputUnits){
  switch (tempInputUnits.toLowerCase()) {
    case "fahrenheit":
      return Math.round((tempInput - 32) * (5/9))
    case "celsius":
      return Math.round((1.8 * tempInput) + 32)
    default:
      console.log(`${tempInputUnits} is not a valid/recognized temperature unit`)
  }
}
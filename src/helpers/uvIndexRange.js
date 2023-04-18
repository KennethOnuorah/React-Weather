const low = (num) => 0 <= num && num <= 2
const moderate = (num) => 3 <= num && num <= 5
const high = (num) => 6 <= num && num <= 7
const veryHigh = (num) => 8 <= num && num <= 10
const extreme = (num) => num >= 11

const getUVIndexCategory = (uvIndex) => {
  switch (true) {
    case low(uvIndex):
      return "Low"
    case moderate(uvIndex):
      return "Moderate"
    case high(uvIndex):
      return "High"
    case veryHigh(uvIndex):
      return "Very High"
    case extreme(uvIndex):
      return "Extreme"
    default:
      return "N/A"
  }
}

export { getUVIndexCategory }
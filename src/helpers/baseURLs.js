const GEOCODE_BASE_URL = "https://geocode.maps.co/search?q="
const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast?"

/**
 * 
 * @param {number} lat (Latitude)
 * @param {number} lon (Longitude)
 * @param {string} tempUnit (Temperature unit: "fahrenheit" and "celsius" only)
 * @returns 
*/
const apiForecastParams = (lat, lon, tempUnit) => {
  tempUnit = tempUnit.toLowerCase()
  if(tempUnit !== "fahrenheit" && tempUnit !== "celsius") return
  return `latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,precipitation_probability,weathercode,surface_pressure,visibility,windspeed_10m,uv_index&current_weather=true&temperature_unit=${tempUnit}&windspeed_unit=mph&timezone=auto`
}
export {GEOCODE_BASE_URL, FORECAST_BASE_URL, apiForecastParams}
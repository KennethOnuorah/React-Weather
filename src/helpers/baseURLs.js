const GEOCODE_URL_BASE = "https://geocode.maps.co/search?q="
const FORECAST_URL_BASE = "https://api.open-meteo.com/v1/forecast?"

/**
 * @param {number} lat Latitude
 * @param {number} lon Longitude
 * @param {string} tempUnit Temperature unit: "fahrenheit" and "celsius" only
*/
const forecastURLParams = (lat, lon, tempUnit) => {
  if(tempUnit !== "fahrenheit" && tempUnit !== "celsius") return
  return `latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,precipitation_probability,weathercode,surface_pressure,visibility,windspeed_10m,uv_index&daily=weathercode,temperature_2m_max&current_weather=true&temperature_unit=${tempUnit}&windspeed_unit=mph&forecast_days=5&timezone=auto`
}
export {GEOCODE_URL_BASE, FORECAST_URL_BASE, forecastURLParams}
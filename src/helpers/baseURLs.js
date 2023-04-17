const GEOCODE_BASE_URL = "https://geocode.maps.co/search?q="
const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast?"
const FORECAST_REMAINING_URL = "&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,precipitation,weathercode,surface_pressure,visibility,windspeed_10m,winddirection_10m,uv_index&current_weather=true&temperature_unit=fahrenheit&forecast_days=5&timezone=auto"

export {GEOCODE_BASE_URL, FORECAST_BASE_URL, FORECAST_REMAINING_URL}
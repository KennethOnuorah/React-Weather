import Search from './components/Search/Search'
import HomeBackground from './components/HomeBackground/HomeBackground'
import WeatherForecast from './components/WeatherForecast/WeatherForecast'

import './App.css'

function App() {
  return (
    <div className="App">
      <HomeBackground/>
      <Search/>
      <WeatherForecast/>
    </div>
  )
}

export default App

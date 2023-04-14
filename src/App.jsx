import Search from './components/Search/Search'
import HomeBackground from './components/HomeBackground/HomeBackground'
import Forecasts from './components/Forecasts/Forecasts'
import Quote from './components/Quote/Quote'

import './App.css'

function App() {
  return (
    <div className="App">
      <HomeBackground/>
      <Search/>
      <div className='searchResults'>
        <Forecasts/>
        <Quote/>
      </div>
    </div>
  )
}

export default App

import { useRoutes, useLocation } from 'react-router-dom'
import useForecast from './hooks/useForecast'
import useQuote from './hooks/useQuote'
import { useSelector } from 'react-redux'

import Search from './components/Search/Search'
import Background from './components/Background/Background'
import Forecasts from './components/Forecasts/Forecasts'
import Quote from './components/Quote/Quote'

import './App.css'

function App() {
  const query = useSelector(state => state.search.searchQuery)
  const location = useLocation()
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)

  useForecast(query, [query, location])
  const quote = useQuote()
  const routes = useRoutes([
    {
      path: "/",
      element: <Search/>,
      children: [
        { 
          path: `search`,
          element: (
            <div
              className="searchResults"
              style={{
                animation: isForecastReceived ? "openResults 0.3s forwards" : "closeResults 0.3s forwards",
              }}
            >
              <Forecasts/>
            </div>
          )
        }
      ]
    }
  ])

  return (
    <div className="App">
      <Background/>
      {routes}
      <Quote text={quote.text} author={quote.author}/>
    </div>
  )
}

export default App

import { useRef } from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { 
  setSearchInput, 
  clearSearchInput, 
  setSearchQuery, 
  clearSearchQuery,
  setQuerySubmitted
} from '../../../redux/slices/search'
import { toggleTemperatureUnit } from '../../../redux/slices/search'
import { setForecastReceived, setForecastData } from '../../../redux/slices/forecast'
import { HiOutlineMagnifyingGlass as SearchIcon, HiArrowLeft as BackIcon } from 'react-icons/hi2'

import './Search.css'

const Search = () => {
  const [searchParams,] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const search = useSelector(state => state.search)
  const forecast = useSelector(state => state.forecast)
  const temperatureUnit = useSelector(state => state.search.temperatureUnit)
  const searchFieldRef = useRef()

  const removeFocus = (ref) => {
    ref.current.blur()
  }

  return (
    <section
      role="search"
      className="searchContainer"
      style={{
        transform: (search.isQuerySubmitted || searchParams.get("q")) ? "translate(0%, 0vh)" : "translate(0%, 30vh)",
      }}
    >
      <div className="cityNameDisplay">
        {!searchParams.get("q") && (search.searchInput !== "" ? search.searchInput : "Enter a location")}
      </div>
      <div className="searchTools">
        {(search.isQuerySubmitted || searchParams.get("q")) && (
          <button
            className="backButton"
            title="Back to home"
            onClick={() => {
              if(!forecast.isForecastReceived) return
              dispatch(setQuerySubmitted(false))
              dispatch(setForecastReceived(false))
              dispatch(setForecastData({}))
              dispatch(clearSearchQuery())
              navigate('/')
              searchFieldRef.current.value = ""
            }}
          >
            <BackIcon size={20} />
          </button>
        )}
        <input
          className="searchField"
          ref={searchFieldRef}
          type={"search"}
          placeholder="E.g. Houston, Texas or Paris, France"
          onKeyDown={(e) => {
            if(e.key == "Enter" && search.searchInput !== ""){
              dispatch(clearSearchInput())
              dispatch(setSearchQuery(search.searchInput))
              dispatch(setQuerySubmitted(true))
              navigate(`/search?q=${search.searchInput}&unit=${temperatureUnit}`)
              removeFocus(searchFieldRef)
            }
          }}
          onInput={(e) => {
            dispatch(setSearchInput(e.target.value))
          }}
        />
        {(!search.isQuerySubmitted && !searchParams.get("q")) && (
          <button
            className="toggleTemperatureUnitButton"
            title="Toggle temperature unit"
            onClick={() => dispatch(toggleTemperatureUnit())}
          >
            {temperatureUnit == "fahrenheit" ? "°F" : "°C"}
          </button>
        )}
        <button
          className="searchButton"
          title="Find results"
          onClick={() => {
            if (search.searchInput === "") return
            dispatch(clearSearchInput())
            dispatch(setSearchQuery(search.searchInput))
            dispatch(setQuerySubmitted(true))
            navigate(`/search?q=${search.searchInput}&unit=${temperatureUnit}`)
          }}
        >
          <SearchIcon size={20} />
        </button>
      </div>
      <Outlet/>
    </section>
  )
}

export default Search

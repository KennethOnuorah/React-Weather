import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  setSearchInput, 
  clearSearchInput, 
  setSearchQuery, 
  clearSearchQuery,
  setQuerySubmitted
 } from '../../../redux/slices/search'
import { setForecastReceived, setForecastData, toggleTemperatureUnit } from '../../../redux/slices/forecast'
import { HiOutlineMagnifyingGlass as SearchIcon, HiArrowLeft as BackIcon } from 'react-icons/hi2'

import './Search.css'

const Search = () => {
  const dispatch = useDispatch()
  const search = useSelector(state => state.search)
  const forecast = useSelector(state => state.forecast)
  const searchFieldRef = useRef()

  return (
    <section
      role="search"
      className="searchContainer"
      style={{
        transform: search.isQuerySubmitted ? "translate(0%, 0vh)" : "translate(0%, 30vh)",
      }}
    >
      <div className="cityNameDisplay">
        {!search.isQuerySubmitted && (search.searchInput !== "" ? search.searchInput : "Enter a location")}
      </div>
      <div className="searchTools">
        {search.isQuerySubmitted && (
          <button
            className="backButton"
            title="Back to home"
            onClick={() => {
              if(!forecast.isForecastReceived) return
              dispatch(setQuerySubmitted(false))
              dispatch(setForecastReceived(false))
              dispatch(setForecastData({}))
              dispatch(clearSearchQuery())
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
            }
          }}
          onInput={(e) => {
            dispatch(setSearchInput(e.target.value))
          }}
        />
        {search.isQuerySubmitted && (
          <button
            className="toggleTemperatureUnitButton"
            title="Toggle temperature unit"
            onClick={() => dispatch(toggleTemperatureUnit())}
          >
            {forecast.temperatureUnit == "fahrenheit" ? "°F" : "°C"}
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
          }}
        >
          <SearchIcon size={20} />
        </button>
      </div>
    </section>
  )
}

export default Search

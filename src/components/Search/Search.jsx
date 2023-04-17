import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  setSearchInput, 
  clearSearchInput, 
  setSearchQuery, 
  clearSearchQuery,
  setQuerySubmitted
 } from '../../../redux/slices/search'
import { setForecastReceived, setForecastData } from '../../../redux/slices/forecast'
import { 
  HiOutlineMagnifyingGlass as SearchIcon,
  HiArrowLeft as BackIcon
} from 'react-icons/hi2'

import './Search.css'

const Search = () => {
  const dispatch = useDispatch()
  const searchInput = useSelector((state) => state.search.searchInput)
  const isQuerySubmitted = useSelector((state) => state.search.isQuerySubmitted)
  const searchFieldRef = useRef()

  return (
    <section
      role="search"
      className="searchContainer"
      style={{
        transform: isQuerySubmitted
          ? "translate(0%, 0vh)"
          : "translate(0%, 30vh)",
      }}
    >
      <div className="cityNameDisplay">
        {!isQuerySubmitted &&
          (searchInput !== "" ? searchInput : "Enter a location")}
      </div>
      <div className="searchTools">
        {
          //in the long run, this should be replaced with the state bool "hasResults"
          isQuerySubmitted && (
            <button
              className="backButton"
              title="Back to home"
              onClick={() => {
                dispatch(setQuerySubmitted(false))
                dispatch(setForecastReceived(false))
                dispatch(setForecastData({}))
                dispatch(clearSearchQuery())
                searchFieldRef.current.value = ""
              }}
            >
              <BackIcon size={20} />
            </button>
          )
        }
        <input
          className="searchField"
          ref={searchFieldRef}
          type={"search"}
          placeholder="E.g. Houston, Texas or Paris, France"
          onInput={(e) => {
            dispatch(setSearchInput(e.target.value))
          }}
        />
        {isQuerySubmitted && (
          <button
            className="toggleTemperatureUnitButton"
            title="Toggle temperature unit"
          >
            °F
          </button>
        )}
        <button
          className="searchButton"
          title="Find results"
          onClick={() => {
            if (searchInput === "") return
            dispatch(clearSearchInput())
            dispatch(setSearchQuery(searchInput))
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

import { useSelector, useDispatch } from 'react-redux'
import { setSearchInput, setSearchQuery } from '../../../redux/slices/search'
import { setIsViewingResults } from '../../../redux/slices/results'
import { 
  HiOutlineMagnifyingGlass as SearchIcon,
  HiArrowLeft as BackIcon
} from 'react-icons/hi2'
import { TfiSave as SaveIcon } from 'react-icons/tfi'

import './Search.css'

const Search = () => {
  const dispatch = useDispatch()
  const searchInput = useSelector((state) => state.search.searchInput)
  const isViewingResults = useSelector((state) => state.results.isViewingResults) 
  
  return (
    <section
      role='search' 
      className="searchContainer"
      style={{
        transform: isViewingResults ? "translate(0%, 0vh)" : "translate(0%, 30vh)",
      }}
    >
      <div className='cityNameDisplay'>
        {!isViewingResults && (searchInput !== "" ? searchInput : "Enter A U.S. city")}
      </div>
      <div className='searchTools'> 
        {
        //in the long run, this should be replaced with the state bool "hasResults"
        isViewingResults && 
          <button 
            className='backButton'
            title='Back to home'
            onClick={() => {
              dispatch(setIsViewingResults(false))
            }}
          >
            <BackIcon size={20}/>
          </button>
        }
        <input 
          className="searchField" 
          type={"search"} 
          placeholder='E.g. Houston, TX'
          onInput={(e) => {
            dispatch(setSearchInput(e.target.value))
          }}
        />
        {
        !isViewingResults && 
          <button 
            className='saveQueryButton'
            title='Save query'
          >
            <SaveIcon size={20}/>
          </button>
        }
        {
        isViewingResults && 
          <button 
            className='toggleTemperatureUnitButton'
            title='Toggle temperature unit'
          >
            °F
          </button>
        }
        <button 
          className='searchButton'
          title='Find results'
          onClick={() => {
            if(searchInput === "") return
            dispatch(setSearchQuery(searchInput))
            dispatch(setIsViewingResults(true))
          }}
        >
          <SearchIcon size={20}/>
        </button>
      </div>
    </section>
  )
}

export default Search

import { useSelector, useDispatch } from 'react-redux'
import { setSearchInput, setSearchQuery } from '../../../redux/slices/search'
import { setIsViewingResults } from '../../../redux/slices/results'
import { 
  HiOutlineMagnifyingGlass as SearchIcon, 
  HiArrowLeft as BackIcon
} from 'react-icons/hi2'

import './Search.css'

const Search = () => {
  const dispatch = useDispatch()
  const searchInput = useSelector((state) => state.search.searchInput)
  const isViewingResults = useSelector((state) => state.results.isViewingResults) 

  return (
    <div 
      className="searchContainer"
      style={{
        transform: isViewingResults ? "translate(0%, 0vh)" : "translate(0%, 30vh)" 
      }}
    >
      <div className='cityNameDisplay'>
        {!isViewingResults && "Enter A U.S. city"}
      </div>
      <div className='searchTools'> 
        {
        isViewingResults && 
          <button 
            className='backButton'
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
          onKeyDown={(e) => {
            if(isViewingResults) e.preventDefault()
          }}
          onInput={(e) => {
            dispatch(setIsViewingResults(false))
            dispatch(setSearchInput(e.target.value))
          }}
        />
        <button 
          className='searchButton'
          onClick={() => {
            if(searchInput === "" || isViewingResults) return
            dispatch(setSearchQuery(searchInput))
            dispatch(setIsViewingResults(true))
          }}
        >
          <SearchIcon size={20}/>
        </button>
      </div>
    </div>
  )
}

export default Search

import { HiOutlineMagnifyingGlass as Search } from 'react-icons/hi2'

import './LocationInput.css'

const LocationInput = () => {
  return (
    <>
    <div className="locationContainer" style={{padding: "10px"}}>
      <div className='cityNameDisplay'>
        Enter a US city
      </div>
      <div className='searchTools'>
        <input 
          className="searchField" 
          type={"search"} 
          placeholder='E.g. Houston, TX'
        />
        <button className='searchButton'>
          <Search size={20}/>
        </button>
      </div>
    </div>
    </>
  )
}

export default LocationInput

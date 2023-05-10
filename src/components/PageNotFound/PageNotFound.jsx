import { AiOutlineFrown as Frown } from 'react-icons/ai'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className='pageNotFoundContainer'>
      <div className="pageNotFound">
        <div className="code">
          404
        </div>
        <div className="text">
          Page not found
        </div>
        <Frown size={50} color='white'/>
      </div>
    </div>
  )
}

export default PageNotFound

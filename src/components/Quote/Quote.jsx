import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Quote.css"

const Quote = ({text, author}) => {
  const [searchParam,] = useSearchParams()
  const isQuerySubmitted = useSelector(state => state.search.isQuerySubmitted)

  return (
    <div 
      className="quote"
      style={{
        display: (isQuerySubmitted || searchParam.get("q")) ? "none" : "block"
      }}
    >
      <em>{`"${text}"`}</em>{author ? ` - ${author}` : ''}
    </div>
  )
}

export default Quote

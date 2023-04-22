import { useSelector } from "react-redux"
import "./Quote.css"

const Quote = ({quote, person}) => {
  const isQuerySubmitted = useSelector(state => state.search.isQuerySubmitted)

  return (
    <div 
      className="quote"
      style={{
        display: isQuerySubmitted ? "none" : "block"
      }}
    >
      <em>{`"${quote}"`}</em>{person ? ` - ${person}` : ''}
    </div>
  )
}

export default Quote

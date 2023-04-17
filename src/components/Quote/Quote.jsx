import { useSelector } from "react-redux"
import "./Quote.css"

const Quote = ({quote, name}) => {
  const isForecastReceived = useSelector(state => state.forecast.isForecastReceived)

  return (
    <article 
      className="quoteSection"
      style={{
        color: isForecastReceived ? "white" : "transparent"
      }}
    >
      Quote of the day
      <div 
        className="quote"
        style={{
          display: isForecastReceived ? "block" : "none"
        }}
      >
        "<em>{quote}</em>" - {name}
      </div>
    </article>
  )
}

export default Quote

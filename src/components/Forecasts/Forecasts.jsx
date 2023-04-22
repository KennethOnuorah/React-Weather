import Now from './Now/Now'
import Hourly from './Predictions/Hourly/Hourly'
import Daily from './Predictions/Daily/Daily'

const Forecasts = () => {

  return (
    <>
      <Now/>
      <Hourly/>
      <Daily/>
    </>
  )
}

export default Forecasts

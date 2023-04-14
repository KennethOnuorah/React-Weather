import React from 'react'
import PropTypes, { number, string } from 'prop-types'

import "./Property.css"

const Property = ({title, amount, unitType}) => {
  return (
    <div className="property">
      <div className='propertyTitle'>
        {title}
      </div>
      <hr/>
      {amount}{unitType}
    </div>
  )
}

Property.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOf([number, string]).isRequired,
  unitType: PropTypes.string.isRequired
}

export default Property

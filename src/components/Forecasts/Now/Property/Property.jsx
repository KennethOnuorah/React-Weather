import React from 'react'
import PropTypes from 'prop-types'

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
  amount: PropTypes.any.isRequired,
  unitType: PropTypes.string.isRequired
}

export default Property

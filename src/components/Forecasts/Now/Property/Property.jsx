import React from 'react'
import PropTypes from 'prop-types'

import "./Property.css"

const Property = ({title, amount, unitType, icon}) => {
  return (
    <div className="property">
      <div className="propertyIcon">
        {icon}
      </div>
      <div className='propertyTitle'>
        {title}
      </div>
      <hr/>
      <div className='propertyAmount'>
        {amount}{unitType}
      </div>
    </div>
  )
}

Property.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.any.isRequired,
  unitType: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
}

export default Property

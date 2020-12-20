import React from 'react'
import PropTypes from 'prop-types'

const Medium = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill={color}
    >
      {' '}
      <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
    </svg>
  )
}

Medium.propTypes = {
  color: PropTypes.string,
}

Medium.defaultProps = {
  color: '#000000',
}

export default Medium

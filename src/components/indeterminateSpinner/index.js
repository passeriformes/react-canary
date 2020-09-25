import React from 'react'
import propTypes from 'prop-types'

import CircularProgress from '@material-ui/core/CircularProgress'

export const IndeterminateSpinner = props =>
  <CircularProgress
    color='secondary'
    size={props.size}
  />

IndeterminateSpinner.propTypes = {
  size: propTypes.number,
}

IndeterminateSpinner.defaultProps = {
  size: 40,
}

import React from 'react'
import PropTypes from 'prop-types'
import { ColorPicker as MUIColorPicker } from 'material-ui-color'

export default function ColorPicker ({ color, updateColor, label }) {
  return (
    <>
      <span>{ label }</span>
      <MUIColorPicker
        deferred
        disableAlpha
        hideTextfield
        value={ color }
        onChange={ updateColor }
      />
    </>
  )
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  updateColor: PropTypes.any,
  label: PropTypes.string
}

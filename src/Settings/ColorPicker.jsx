import React from 'react'
import PropTypes from 'prop-types'
import { ColorPicker as MUIColorPicker } from 'material-ui-color'

export default function ColorPicker ({ color, updateColor, label, type }) {
  const updateColorWrapper = (color) => updateColor(type, `#${color.hex}`)

  return (
    <>
      <span>{ label }</span>
      <MUIColorPicker
        deferred
        disableAlpha
        hideTextfield
        value={ color }
        onChange={ updateColorWrapper }
      />
    </>
  )
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  updateColor: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string
}

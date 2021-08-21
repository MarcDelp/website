import React from 'react'
import PropTypes from 'prop-types'
import { ColorPicker as MUIColorPicker } from 'material-ui-color'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  colorPickerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  colorPicker: {
    marginRight: theme.spacing(3)
  }
}))

export default function ColorPicker ({ color, updateColor, label, type }) {
  const updateColorWrapper = (color) => updateColor(type, `#${color.hex}`)
  const classes = useStyles()

  return (
    <div className={ classes.colorPickerContainer }>
      <span className={ classes.label }>{ label }</span>
      <div className={ classes.colorPicker }>
        <MUIColorPicker
          deferred
          disableAlpha
          hideTextfield
          value={ color }
          onChange={ updateColorWrapper }
        />
      </div>
    </div>
  )
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  updateColor: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string
}

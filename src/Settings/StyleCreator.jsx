import React, { useContext } from 'react'
import { useTheme } from '@material-ui/core/styles'

import ColorPicker from './ColorPicker'
import ThemeContext from '../ThemeHandler/context'

export default function StyleCreator () {
  const { dispatch } = useContext(ThemeContext)
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
  const secondaryColor = theme.palette.secondary.main
  const backgroundColor = theme.palette.background.default

  const updateColor = (colorType, color) => dispatch({
    type: `COLOR-${colorType}`,
    color
  })

  return (
    <>
      <ColorPicker
        label='Primary color'
        color={ primaryColor }
        type='PRIMARY'
        updateColor={ updateColor }
      />
      <ColorPicker
        label='Secondary color'
        color={ secondaryColor }
        type='SECONDARY'
        updateColor={ updateColor }
      />
      <ColorPicker
        label='Background color'
        color={ backgroundColor }
        type='BACKGROUND'
        updateColor={ updateColor }
      />
    </>
  )
}

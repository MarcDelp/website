import React, { useContext } from 'react'
import { useTheme } from '@material-ui/core/styles'

import ColorPicker from './ColorPicker'
import ThemeContext from '../ThemeHandler/context'

export default function StyleCreator () {
  const { dispatch } = useContext(ThemeContext)
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
  const secondaryColor = theme.palette.secondary.main
  const defaultBackgroundColor = theme.palette.background.default
  const paperBackgroundColor = theme.palette.background.paper

  // This function will dispatch an action to update the theme colors
  // Material-UI will automatically compute color variants for primary and
  // secondary colors, but not for background
  // To ease the use of the style creator, we automatically define the
  // theme type (light or dark) based on the background color
  // MUI will then use it to define text & icons color
  const updateTheme = (updateType, color) => {
    const background = updateType === 'BACKGROUND' ? color : defaultBackgroundColor
    const paperBackground = updateType === 'BACKGROUND'
      ? theme.palette.augmentColor({ main: color }).light
      : paperBackgroundColor
    const primary = updateType === 'PRIMARY' ? color : primaryColor
    const secondary = updateType === 'SECONDARY' ? color : secondaryColor

    // Look for augmented color from MUI and if contrast text is set to
    // white, consider it's a dark theme
    const darkTheme = theme.palette.augmentColor({ main: background }).contrastText === '#fff'

    const colors = {
      primary: {
        main: primary
      },
      secondary: {
        main: secondary
      },
      background: {
        default: background,
        paper: paperBackground
      },
      type: darkTheme ? 'dark' : 'light'
    }

    return dispatch({
      type: 'COLORS',
      colors
    })
  }

  return (
    <>
      <ColorPicker
        label='Couleur primaire'
        color={ primaryColor }
        type='PRIMARY'
        updateTheme={ updateTheme }
      />
      <ColorPicker
        label='Couleur secondaire'
        color={ secondaryColor }
        type='SECONDARY'
        updateTheme={ updateTheme }
      />
      <ColorPicker
        label="Couleur d'arrière plan"
        color={ defaultBackgroundColor }
        type='BACKGROUND'
        updateTheme={ updateTheme }
      />
    </>
  )
}

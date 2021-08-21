import React, { useContext } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { useTheme } from '@material-ui/core/styles'

import StyleCreator from './StyleCreator'
import ThemeContext from '../ThemeHandler/context'

export default function StyleSelector () {
  const { dispatch, type: themeType } = useContext(ThemeContext)
  const theme = useTheme()

  const handleStyleChange = (event) => {
    const selectedTheme = event.target.value
    if (selectedTheme !== 'custom') {
      dispatch({ type: `THEME-${selectedTheme.toUpperCase()}` })
    } else {
      dispatch({
        type: 'COLORS',
        colors: theme.palette
      })
    }
  }

  return (
    <>
      <h3>Gestion du thème</h3>
      <RadioGroup
        value={ themeType }
        onChange={ handleStyleChange }
      >
        <FormControlLabel
          disabled
          value='light'
          control={ <Radio/> }
          label='Thème clair'
        />
        <FormControlLabel
          value='dark'
          control={ <Radio/> }
          label='Thème sombre'
        />
        <FormControlLabel
          value='material-light'
          control={ <Radio/> }
          label='Thème clair Material-UI'
        />
        <FormControlLabel
          value='material-dark'
          control={ <Radio/> }
          label='Thème sombre Material-UI'
        />
        <FormControlLabel
          value='custom'
          control={ <Radio/> }
          label='Thème manuel'
        />
      </RadioGroup>

      {
        themeType === 'custom' && <StyleCreator/>
      }
    </>
  )
}

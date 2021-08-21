import base from './themes/base'
import darkTheme from './themes/darkTheme'
import lightTheme from './themes/lightTheme'

export const updateTheme = (state, action) => {
  switch (action.type) {
    case 'COLORS':
      return {
        type: 'custom',
        themeValues: {
          ...base,
          palette: {
            ...action.colors
          }
        }
      }

    case 'THEME-DARK':
      return {
        type: 'dark',
        themeValues: darkTheme
      }

    case 'THEME-MATERIAL-DARK':
      return {
        type: 'material-dark',
        themeValues: {
          ...base,
          palette: {
            type: 'dark'
          }
        }
      }

    case 'THEME-LIGHT':
      return {
        type: 'light',
        themeValues: lightTheme
      }

    case 'THEME-MATERIAL-LIGHT':
      return {
        type: 'material-light',
        themeValues: {
          ...base,
          palette: {
            type: 'light'
          }
        }
      }
  }
}

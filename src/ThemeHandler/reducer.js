import base from './themes/base'
import darkTheme from './themes/darkTheme'
import lightTheme from './themes/lightTheme'

export const updateColorTheme = (state, action) => {
  switch (action.type) {
    case 'COLORS':
      return {
        palette: {
          ...action.colors
        }
      }

    case 'THEME-DARK':
      return darkTheme

    case 'THEME-MATERIAL-DARK':
      return {
        ...base,
        palette: {
          type: 'dark'
        }
      }

    case 'THEME-LIGHT':
      return lightTheme

    case 'THEME-MATERIAL-LIGHT':
      return {
        ...base,
        palette: {
          type: 'light'
        }
      }
  }
}

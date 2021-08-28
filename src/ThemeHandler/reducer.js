import base from './themes/base'
import darkTheme from './themes/darkTheme'
import lightTheme from './themes/lightTheme'

export const updateTheme = (state, action) => {
  switch (action.type) {
    case 'COLORS':
      return {
        type: 'custom',
        themeValues: {
          overrides: {
            ...base
          },
          palette: {
            ...action.colors
          }
        }
      }

    case 'THEME-DARK':
      return {
        type: 'dark',
        themeValues: {
          overrides: {
            ...base
          },
          ...darkTheme
        }
      }

    case 'THEME-MATERIAL-DARK':
      return {
        type: 'material-dark',
        themeValues: {
          overrides: {
            ...base
          },
          palette: {
            type: 'dark'
          }
        }
      }

    case 'THEME-LIGHT':
      return {
        type: 'light',
        themeValues: {
          overrides: {
            ...base
          },
          ...lightTheme
        }
      }

    case 'THEME-MATERIAL-LIGHT':
      return {
        type: 'material-light',
        themeValues: {
          overrides: {
            ...base
          },
          palette: {
            type: 'light'
          }
        }
      }
  }
}

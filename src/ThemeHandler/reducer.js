import darkTheme from './themes/darkTheme'
import lightTheme from './themes/lightTheme'

export const updateColorTheme = (state, action) => {
  let newState
  switch (action.type) {
    case 'COLOR-PRIMARY':
      newState = {
        ...state,
        palette: {
          ...state.palette,
          primary: {
            main: action.color
          }
        }
      }
      delete newState.palette.type
      return newState

    case 'COLOR-SECONDARY':
      newState = {
        ...state,
        palette: {
          ...state.palette,
          secondary: {
            main: action.color
          }
        }
      }
      delete newState.palette.type
      return newState

    case 'COLOR-BACKGROUND':
      newState = {
        ...state,
        palette: {
          ...state.palette,
          background: {
            paper: action.color
          }
        }
      }
      delete newState.palette.type
      return newState

    case 'THEME-DARK':
      return darkTheme

    case 'THEME-MATERIAL-DARK':
      return {
        palette: {
          type: 'dark'
        }
      }

    case 'THEME-LIGHT':
      return lightTheme

    case 'THEME-MATERIAL-LIGHT':
      return {
        palette: {
          type: 'light'
        }
      }
  }
}

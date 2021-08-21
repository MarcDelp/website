import base from './base'

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#00796b'
    },
    secondary: {
      main: '#1976d2'
    },
    background: {
      default: '#252E39',
      paper: '#444c56'
    }
  }
}

export default {
  ...base,
  ...darkTheme
}

import base from './base'

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#00897b'
    },
    // secondary: {
    //   main:
    // },
    background: {
      default: '#303030'
    },
    text: {
      primary: '#fff'
    }
  }
}

export default {
  ...base,
  ...darkTheme
}

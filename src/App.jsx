import React, { useReducer } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import Navbar from './Navbar'
import ThemeContext from './ThemeHandler/context'
import { updateColorTheme } from './ThemeHandler/reducer'
import darkTheme from './ThemeHandler/themes/darkTheme'

export default function App () {
  const [rawTheme, dispatchTheme] = useReducer(updateColorTheme, darkTheme)
  const theme = createTheme(rawTheme)
  const themeValue = {
    dispatch: dispatchTheme
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>

        <ThemeContext.Provider value={themeValue}>
          <Navbar/>
        </ThemeContext.Provider>

        <Container>
          <Switch>
            <Route exact path='/'>
              <h1>Welcome!</h1>
            </Route>

            <Route path='/cv'>
              <h1>CV</h1>
            </Route>

            <Route path='/privacy'>
              <h1>Privacy</h1>
            </Route>

            <Route path='*'>
              <h1>404</h1>
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

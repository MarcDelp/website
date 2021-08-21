import React, { useReducer } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import Curriculum from './Curriculum'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import NotFound from './NotFound'
import Privacy from './Privacy'
import ThemeContext from './ThemeHandler/context'
import { updateTheme } from './ThemeHandler/reducer'
import darkTheme from './ThemeHandler/themes/darkTheme'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100% - 64px)', // Navbar takes 64px in height
    justifyContent: 'space-between'
  }
}))

export default function App () {
  const [rawTheme, dispatchTheme] = useReducer(updateTheme, {
    type: 'dark',
    themeValues: darkTheme
  })
  const theme = createTheme(rawTheme.themeValues)
  const themeInfo = {
    dispatch: dispatchTheme,
    type: rawTheme.type
  }
  const classes = useStyles()

  return (
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
        <CssBaseline/>

        <ThemeContext.Provider value={ themeInfo }>
          <Navbar/>
        </ThemeContext.Provider>

        <Container className={ classes.container }>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>

            <Route path='/cv'>
              <Curriculum/>
            </Route>

            <Route path='/privacy'>
              <Privacy/>
            </Route>

            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>

          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

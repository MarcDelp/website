import React, { useEffect, useReducer, useState } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import Curriculum from './Content/Curriculum/Curriculum'
import Home from './Content/Home'
import NotFound from './Content/NotFound'
import Privacy from './Content/Privacy'
import Roadmap from './Content/Roadmap'
import Footer from './Footer'
import DisplayContext from './DisplayHandler/context'
import Navbar from './Navbar/Navbar'
import ThemeContext from './ThemeHandler/context'
import { updateTheme } from './ThemeHandler/reducer'
import base from './ThemeHandler/themes/base'
import darkTheme from './ThemeHandler/themes/darkTheme'
import desktop from './ThemeHandler/themes/desktop'
import medium from './ThemeHandler/themes/medium'
import mobile from './ThemeHandler/themes/mobile'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100% - 64px)', // Navbar takes 64px in height
    justifyContent: 'space-between'
  }
}))

export default function App () {
  const [display, setDisplay] = useState('desktop')
  const [rawTheme, dispatchTheme] = useReducer(updateTheme, {
    type: 'dark',
    themeValues: {
      overrides: {
        ...base
      },
      ...darkTheme
    }
  })

  // Update rawTheme with display info
  rawTheme.themeValues.overrides = {
    ...rawTheme.themeValues.overrides,
    ...(
      display === 'mobile'
        ? mobile
        : display === 'medium'
          ? medium
          : desktop
    )
  }

  const theme = createTheme(rawTheme.themeValues)
  const themeInfo = {
    dispatch: dispatchTheme,
    type: rawTheme.type
  }
  const classes = useStyles()

  // On component mount, decide which display should be used
  useEffect(() => {
    if (window.innerWidth < 600) {
      setDisplay('mobile')
    } else if (window.innerWidth < 1000) {
      setDisplay('medium')
    }
  }, [])

  // Also add listener for resize event to switch between display modes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setDisplay('mobile')
      } else if (window.innerWidth < 1000) {
        setDisplay('medium')
      } else {
        setDisplay('desktop')
      }
    }

    window.addEventListener('resize', handleResize)

    return () => { // on component unmount, remove resize listener
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <BrowserRouter>
      <DisplayContext.Provider value={ display }>
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

              <Route path='/roadmap'>
                <Roadmap/>
              </Route>

              <Route path='*'>
                <NotFound/>
              </Route>
            </Switch>

            <Footer />
          </Container>
        </ThemeProvider>
      </DisplayContext.Provider>
    </BrowserRouter>
  )
}

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Navbar from './Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar/>
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
      </ThemeProvider>
    </BrowserRouter>
  )
}

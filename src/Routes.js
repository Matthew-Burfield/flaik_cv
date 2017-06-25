import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { MainPage } from './MainPage'

const tempComponent = () => (
  <div>text</div>
)

export const Routes = () => (
  <Router>
    <div className='app'>
      <Route exact path='/' component={MainPage} />
      <Route path='/buttonone' component={tempComponent} />
    </div>
  </Router>
)

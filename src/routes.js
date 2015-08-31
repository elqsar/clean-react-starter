import React from 'react'
import { Route, DefaultRoute, NotFoundRoute } from 'react-router'

import Home from './components/home'
import Repo from './components/repo'
import Search from './components/search'

const NotFound = React.createClass({
  render() {
    return (
      <div className='not-found'>
        <h2>Give it another shot</h2>
      </div>
    )
  }
})

export default (
  <Route path='/' handler={ Home }>
    <DefaultRoute handler={ Search } />
    <Route name='repo' path='/repo/:owner/:name' handler={ Repo } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

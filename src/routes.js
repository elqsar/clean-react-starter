import React from 'react'
import { Route, DefaultRoute } from 'react-router'

import Home from './components/home'
import Repo from './components/repo'
import Search from './components/search'

export default (
  <Route path='/' handler={ Home }>
    <DefaultRoute handler={ Search } />
    <Route name='repo' path='/repo/:owner/:name' handler={ Repo } />
  </Route>
);

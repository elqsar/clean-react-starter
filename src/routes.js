var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

var Home = require('./components/home');
var Repo = require('./components/repo');
var Search = require('./components/search');

module.exports = (
  <Route path='/' handler={ Home }>
    <DefaultRoute handler={ Search } />
    <Route name='repo' path='/repo/:owner/:name' handler={ Repo } />
  </Route>
);

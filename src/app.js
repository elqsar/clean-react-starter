var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var Home = require('./components/home');

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.querySelector('.container'));
});

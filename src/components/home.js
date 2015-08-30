var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

module.exports = React.createClass({
  render() {
    return (
      <div>
        <div className="content">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

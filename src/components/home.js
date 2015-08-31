import React from 'react'
import { RouteHandler } from 'react-router'

const Home = React.createClass({
  render() {
    return (
      <div>
        <div className="content">
          <RouteHandler />
        </div>
      </div>
    )
  }
})

export default Home

import React from 'react'

const Loading = React.createClass({
  render() {
    return (
      <div className="col s6 offset-s5">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Loading

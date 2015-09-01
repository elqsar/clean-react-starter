import React from 'react'
import { Link } from 'react-router'

const RepoCard = React.createClass({
  render() {
    return (
      <div className="col s6">
        <div className="card small blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{ this.props.repo.name }</span>
            <p>{ this.props.repo.description }</p>
          </div>
          <div className="card-action">
            <Link to="repo" params={{ owner: this.props.repo.owner.login, name: this.props.repo.name }}>Details</Link>
          </div>
        </div>
      </div>
    )
  }
})

export default RepoCard

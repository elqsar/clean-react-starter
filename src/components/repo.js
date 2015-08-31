import React from 'react'
import RepoActions from '../actions/repoActions'
import RepoStore from '../stores/repoStore'
import Loading from './loading'

const Repo = React.createClass({
  getInitialState() {
    return RepoStore.getState()
  },

  onChange(state) {
    this.setState(state)
  },

  componentDidMount() {
    let { owner, name } = this.props.params
    RepoActions.getRepoDetails(owner, name)
    RepoStore.listen(this.onChange)
  },

  componentWillUnmount() {
    RepoStore.unlisten(this.onChange)
  },

  renderLoading() {
    return (
      <div className="row">
        <Loading />
      </div>
    )
  },

  renderRepo() {
    return (
        <div className='repo-details'>
          <div className='repo-detals-name'>
            { this.state.repo.name }
          </div>
          <div className='repo-details-avatar'>
            <img className='circle' src={ this.state.repo.owner.avatar_url } width='90'></img>
          </div>
          <div>
            <strong>{ this.state.repo.owner.login }</strong>
          </div>
          <div className='repo-details-content'>
            <div className='repo-details-content-row'>
              <i className="fa fa-star"></i> { this.state.repo.stargazers_count }
            </div>
            <div className='repo-details-content-row'>
              <i className="fa fa-code-fork"></i> { this.state.repo.forks_count }
            </div>
            <div className='repo-details-content-row'>
              <i className="fa fa-bug"></i> { this.state.repo.open_issues_count }
            </div>
          </div>
          <div>{ this.state.repo.description }</div>
        </div>
    )
  },

  render() {
    return (
      <div className='row'>
        { this.state.loading ? this.renderLoading() : this.renderRepo() }
      </div>
    )
  }
})

export default Repo
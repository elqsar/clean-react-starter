import React from 'react'
import RepoActions from '../actions/repoActions'
import RepoStore from '../stores/repoStore'
import Loading from './loading'

const Repo = React.createClass({
  getInitialState() {
    return RepoStore.getState()
  },

  onChange() {
    this.setState(RepoStore.getState())
  },

  componentWillMount() {
    let { owner, name } = this.props.params
    RepoActions.getRepoDetails(owner, name)
    RepoStore.listen(this.onChange)
  },

  componentWillUnmount() {
    RepoStore.unlisten(this.onChange)
  },

  renderLoading() {
    return (
      <Loading />
    )
  },

  renderRepo() {
    return (
      <div>
        { this.state.repo.full_name } <br/>
        { this.state.repo.language } <br/>
      </div>
    )
  },

  render() {
    return (
      <div className="row">
        { this.state.loading ? this.renderLoading() : this.renderRepo() }
      </div>
    )
  }
})

export default Repo
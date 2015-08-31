import React from 'react'
import SearchStore from '../stores/searchStore'
import RepoActions from '../actions/repoActions'
import RepoCard from './repoCard'
import Loading from './loading'

const Search = React.createClass({
  getInitialState() {
    return SearchStore.getState()
  },

  componentDidMount() {
    SearchStore.listen(this.onChange)
  },

  componentWillUnmount() {
    SearchStore.unlisten(this.onChange)
  },

  onChange(state) {
    this.setState(state)
  },

  search(e) {
    e.preventDefault();
    var searchTerm = this.refs.searchTerm.getDOMNode().value

    if(searchTerm) {
      this.refs.searchTerm.getDOMNode().value = ''
      RepoActions.search(searchTerm)
    }
  },

  renderSearch() {
    return (
      <div className="row">
        <form onSubmit={ this.search } className='col s12'>
        <div className="row">
            <div className="input-field col s12">
              <input ref="searchTerm" id="search" type="text" className="validate"/>
              <label htmlFor="search">Search</label>
            </div>
          </div>
        </form>
      </div>
    )
  },

  renderLoading() {
    return (
      <div className="row">
        <Loading />
      </div>
    )
  },

  renderContent() {
    return (
      <div className="row">
          { this.state.repos.map((repo) => {
              return <RepoCard key={ repo.id } repo={ repo }/>
          })}
      </div>
    )
  },

  render() {
    return (
      <div>
        { this.renderSearch() }
        { this.state.loading ? this.renderLoading() : this.renderContent() }
      </div>
    )
  }
})

export default Search

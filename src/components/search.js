var React = require('react');
var SearchStore = require('../stores/searchStore');
var RepoActions = require('../actions/repoActions');
var RepoCard = require('./repoCard');
var Loading = require('./loading');

module.exports = React.createClass({
  getInitialState() {
    return SearchStore.getState();
  },

  componentDidMount() {
    SearchStore.listen(this.onChange);
  },

  componentWillUnmount() {
    SearchStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  search(e) {
    e.preventDefault();
    var searchTerm = this.refs.searchTerm.getDOMNode().value;
    this.refs.searchTerm.getDOMNode().value = '';

    RepoActions.search(searchTerm);
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
    );
  },

  renderLoading() {
    return (
      <div className="row">
        <Loading />
      </div>
    );
  },

  renderContent() {
    return (
      <div className="row">
          { this.state.repos.map(function(repo) {
              return <RepoCard repo={ repo }/>;
          })}
      </div>
    );
  },

  render() {
    return (
      <div>
        { this.renderSearch() }
        { this.state.loading ? this.renderLoading() : this.renderContent() }
      </div>
    );
  }
});

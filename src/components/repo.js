var React = require('react');
var RepoActions = require('../actions/repoActions');
var RepoStore = require('../stores/repoStore');
var Loading = require('./loading');

module.exports = React.createClass({
  getInitialState() {
    return RepoStore.getState();
  },

  onChange() {
    this.setState(RepoStore.getState());
  },

  componentWillMount() {
    var params = this.props.params;
    RepoActions.getRepoDetails(params.owner, params.name);
    RepoStore.listen(this.onChange);
  },

  componentWillUnmount() {
    RepoStore.unlisten(this.onChange);
  },

  renderLoading() {
    return (
      <Loading />
    );
  },

  renderRepo() {
    return (
      <div>
        { this.state.repo.full_name } <br/>
        { this.state.repo.language } <br/>
      </div>
    );
  },

  render() {
    return (
      <div className="row">
        { this.state.loading ? this.renderLoading() : this.renderRepo() }
      </div>
    );
  }
});

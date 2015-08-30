var React = require('react');
var RepoActions = require('../actions/repoActions');
var RepoStore = require('../stores/repoStore');

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

  render() {
    return (
      <div className="row">
        { this.state.repo.full_name } <br/>
        { this.state.repo.language } <br/>
      </div>
    );
  }
});

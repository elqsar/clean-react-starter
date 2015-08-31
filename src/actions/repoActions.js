var Api = require('../api/github');
var alt = require('../alt');

var github = new Api('https://api.github.com');

class RepoActions {
  search(searchTerm) {
    this.dispatch();
    github.searchRepos(searchTerm).then((result) => {
      this.actions.onSearchSuccess(result);
    });
  }

  getRepoDetails(owner, name) {
    this.dispatch();
    github.getRepoDetails(owner, name).then((result) => {
      this.actions.onDetailSuccess(result);
    });
  }

  onSearchSuccess(repos) {
    this.dispatch(repos);
  }

  onDetailSuccess(repo) {
    this.dispatch(repo);
  }
}

module.exports = alt.createActions(RepoActions);

var alt = require('../alt');
var RepoActions = require('../actions/repoActions');

class SearchStore {
  constructor() {
    this.repos = [];
    this.loading = false;
    this.bindListeners({
      searchRepos: RepoActions.search,
      onSearchSuccess: RepoActions.onSearchSuccess,
    });
  }

  searchRepos() {
    this.repos = [];
    this.loading = true;
  }

  onSearchSuccess(repos) {
    this.repos = repos;
    this.loading = false;
  }
}

module.exports = alt.createStore(SearchStore, 'SearchStore');

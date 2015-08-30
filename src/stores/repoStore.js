var alt = require('../alt');
var RepoActions = require('../actions/repoActions');

class RepoStore {
  constructor() {
    this.repo = {};
    this.loading = false;
    this.bindListeners({
      getRepoDetail: RepoActions.getRepoDetails,
      onDetailSuccess: RepoActions.onDetailSuccess
    });
  }

  getRepoDetail() {
    this.repo = {};
    this.loading = true;
  }

  onDetailSuccess(repo) {
    this.loading = false;
    this.repo = repo;
  }
}

module.exports = alt.createStore(RepoStore, 'RepoStore');

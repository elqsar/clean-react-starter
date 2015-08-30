var rest = require('superagent');
var alt = require('../alt');

class RepoActions {
  search(searchTerm) {
    this.dispatch();
    rest
      .get('https://api.github.com/search/repositories')
      .query({ q: searchTerm })
      .send()
      .end((err, result) => {
        this.actions.onSearchSuccess(result.body.items);
      });
  }

  getRepoDetails(owner, name) {
    this.dispatch();
    rest
      .get(`https://api.github.com/repos/${owner}/${name}`)
      .send()
      .end((err, result) => {
        this.actions.onDetailSuccess(result.body);
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

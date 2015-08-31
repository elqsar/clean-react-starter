import Api from '../api/github'
import alt from '../alt'

class RepoActions {
  search(searchTerm) {
    this.dispatch();
    Api.searchRepos(searchTerm).then((result) => {
      this.actions.onSearchSuccess(result);
    })
  }

  getRepoDetails(owner, name) {
    this.dispatch();
    Api.getRepoDetails(owner, name).then((result) => {
      this.actions.onDetailSuccess(result);
    })
  }

  onSearchSuccess(repos) {
    this.dispatch(repos)
  }

  onDetailSuccess(repo) {
    this.dispatch(repo)
  }
}

export default alt.createActions(RepoActions)

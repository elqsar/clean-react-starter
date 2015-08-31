import alt from '../alt'
import RepoActions from '../actions/repoActions'

class RepoStore {
  constructor() {
    this.repo = {}
    this.repo.owner = {}
    this.loading = false
    this.bindListeners({
      getRepoDetails: RepoActions.getRepoDetails,
      onDetailSuccess: RepoActions.onDetailSuccess
    })
  }

  getRepoDetails() {
    this.repo = {}
    this.repo.owner = {};
    this.loading = true
  }

  onDetailSuccess(repo) {
    this.repo = repo
    this.repo.owner = repo.owner
    this.loading = false
  }
}

export default alt.createStore(RepoStore, 'RepoStore')

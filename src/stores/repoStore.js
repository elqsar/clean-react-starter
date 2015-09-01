import alt from '../alt'
import { getRepoDetails, onDetailSuccess } from '../actions/repoActions'
import ImmutableStore from 'alt/utils/ImmutableUtil';

class RepoStore {
  constructor() {
    this.repo = {}
    this.repo.owner = {}
    this.loading = false
    this.bindListeners({
      getRepoDetails: getRepoDetails,
      onDetailSuccess: onDetailSuccess
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

export default alt.createStore(ImmutableStore(RepoStore), 'RepoStore')

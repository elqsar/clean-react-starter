import alt from '../alt'
import { search, onSearchSuccess } from '../actions/repoActions'
import ImmutableStore from 'alt/utils/ImmutableUtil';

class SearchStore {
  constructor() {
    this.repos = []
    this.loading = false
    this.bindListeners({
      searchRepos: search,
      onSearchSuccess: onSearchSuccess,
    })
  }

  searchRepos() {
    this.repos = []
    this.loading = true
  }

  onSearchSuccess(repos) {
    this.repos = repos
    this.loading = false
  }
}

export default alt.createStore(ImmutableStore(SearchStore), 'SearchStore')

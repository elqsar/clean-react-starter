import alt from '../alt'
import RepoActions from '../actions/repoActions'

class SearchStore {
  constructor() {
    this.repos = []
    this.loading = false
    this.bindListeners({
      searchRepos: RepoActions.search,
      onSearchSuccess: RepoActions.onSearchSuccess,
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

export default alt.createStore(SearchStore, 'SearchStore')

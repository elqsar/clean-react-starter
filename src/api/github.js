import rest from 'superagent'

class Github {
  constructor(baseUrl = 'https://api.github.com') {
    this.baseUrl = baseUrl
  }

  searchRepos(searchTerm) {
    return new Promise((resolve, reject) => {
      rest
        .get(`${this.baseUrl}/search/repositories`)
        .query({ q: searchTerm })
        .send()
        .end((err, result) => {
          resolve(result.body.items)
        })
    })
  }

  getRepoDetails(owner, name) {
    return new Promise((resolve, reject) => {
      rest
        .get(`${this.baseUrl}/repos/${owner}/${name}`)
        .send()
        .end((err, result) => {
          resolve(result.body)
      })
    })
  }
}

export default new Github()
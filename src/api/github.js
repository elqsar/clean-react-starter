var rest = require('superagent');

class Github {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  searchRepos(searchTerm) {
    var promise = new Promise((resolve, reject) => {
      rest
        .get(`${this.baseUrl}/search/repositories`)
        .query({ q: searchTerm })
        .send()
        .end((err, result) => {
          resolve(result.body.items);
        });
    });
    return promise;
  }

  getRepoDetails(owner, name) {
    return new Promise((resolve, reject) => {
      rest
        .get(`${this.baseUrl}/repos/${owner}/${name}`)
        .send()
        .end((err, result) => {
          resolve(result.body);
      });
    });
  }
}

module.exports = Github;
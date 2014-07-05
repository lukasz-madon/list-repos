'use strict';

describe('Service: GitHubRepos', function () {

  // load the service's module
  beforeEach(module('listRepoApp'));

  // instantiate service
  var GitHubRepos;
  beforeEach(inject(function (_GitHubRepos_) {
    GitHubRepos = _GitHubRepos_;
  }));

  it('should do something', function () {
    expect(!!GitHubRepos).toBe(true);
  });

});

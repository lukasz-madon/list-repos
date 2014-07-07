'use strict';
// TODO: use mocks with jasmine to detect call
describe('Service: GitHubRepos', function () {
  // load the service's module
  beforeEach(module('listRepoApp'));
  // instantiate service
  var GitHubRepos,
  httpBackend;

  beforeEach(inject(function (_GitHubRepos_, $httpBackend) {
    GitHubRepos = _GitHubRepos_;
    httpBackend = $httpBackend;
    httpBackend.whenJSONP('https://api.github.com/users/test/repos?per_page=100&callback=JSON_CALLBACK').respond({
      repos: {
        data: [{
          name: 'test',
          stargazers_count: 7,
          forks_count: 1
          }, {
          name: 'test2',
          stargazers_count: 45,
          forks_count: 6
          }]
      }
    });
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should return json collection on GET request', function () {
    GitHubRepos.all({ user: 'test' }).$promise.then(function(res) {
      expect(res.repos.data[0].name).toBe('test');
    });
    httpBackend.flush();
  });
});

describe('Service: GitHubRepo', function () {
  // load the service's module
  beforeEach(module('listRepoApp'));
  // instantiate service
  var GitHubRepo,
  httpBackend;

  beforeEach(inject(function (_GitHubRepo_, $httpBackend) {
    GitHubRepo = _GitHubRepo_;
    httpBackend = $httpBackend;
    httpBackend.whenJSONP('https://api.github.com/repos/test/test1?callback=JSON_CALLBACK').respond({
      repo: {
        data: {
          name: 'test1',
          html_url: '',
          subscribers_count : 7,
          forks_count: 1,
          watchers_count: 54,
          description: 'test desc',
          language: 'python'
        }
      }
    });

  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should return json collection on GET request', function () {
    GitHubRepo.get({ repo: 'test1', user: 'test' }).$promise.then(function(res) {
      expect(res.repo.data.name).toBe('test1');
    });
    httpBackend.flush();
  });
});

describe('Service: GitHubUser', function () {
  // load the service's module
  beforeEach(module('listRepoApp'));
  // instantiate service
  var GitHubUser,
  httpBackend;

  beforeEach(inject(function (_GitHubUser_, $httpBackend) {
    GitHubUser = _GitHubUser_;
    httpBackend = $httpBackend;
    httpBackend.whenJSONP('https://api.github.com/users/test2?callback=JSON_CALLBACK').respond({
      user: {
        data: {
          login: 'test2',
          avatar_url: '',
        }
      }
    });

  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should return json collection on GET request', function () {
    GitHubUser.get({ user: 'test2' }).$promise.then(function(res) {
      expect(res.user.data.login).toBe('test2');
    });
    httpBackend.flush();
  });
});

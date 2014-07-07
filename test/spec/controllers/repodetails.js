'use strict';

describe('Controller: RepodetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('listRepoApp'));

  var RepodetailsCtrl,
    scope,
    GitHubRepoMock,
    mockResponse;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mockResponse = {};
    GitHubRepoMock = {
      get : function() { return mockResponse; }
    };
    RepodetailsCtrl = $controller('RepodetailsCtrl', {
      $scope: scope,
      GitHubRepo: GitHubRepoMock
    });
  }));

  it('repo should be set to response when RepodetailsCtrl runs', function () {
    expect(scope.repo).toBe(mockResponse);
  });
});

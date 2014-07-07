'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('listRepoApp'));

  var MainCtrl,
    scope,
    GitHubReposMock,
    mockResponse;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mockResponse = {}
    GitHubReposMock = {
      all : function() { return mockResponse; }
    }
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      GitHubRepos: GitHubReposMock
    });
  }));

  it('repos should be set to response when MainCtrl runs', function () {
    expect(scope.repos).toBe(mockResponse);
  });
});

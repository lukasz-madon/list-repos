'use strict';

describe('Controller: BodyCtrl', function () {

  // load the controller's module
  beforeEach(module('listRepoApp'));

  var BodyCtrl,
    scope,
    GitHubUserMock,
    mockResponse;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mockResponse = {}
    GitHubUserMock = {
      get : function() { return mockResponse; }
    }
    BodyCtrl = $controller('BodyCtrl', {
      $scope: scope,
      GitHubUser: GitHubUserMock
    });
  }));

  it('user should be set to response when BodyCtrl runs', function () {
    expect(scope.user).toBe(mockResponse);
  });

  describe('Check configuration for all routes', function () {
    it('should maps routes to Controllers', inject(function ($route) {
      expect($route.routes['/'].controller).toBe('MainCtrl');
      expect($route.routes['/'].templateUrl).toBe('views/main.html');

      expect($route.routes['/repo-details/:repo'].controller).toBe('RepodetailsCtrl');
      expect($route.routes['/repo-details/:repo'].templateUrl).toBe('views/repodetails.html');

      expect($route.routes[null].redirectTo).toEqual('/')
    }));
  });
});

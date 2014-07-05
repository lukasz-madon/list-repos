'use strict';

describe('Controller: RepodetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('listRepoApp'));

  var RepodetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepodetailsCtrl = $controller('RepodetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {

  });
});

'use strict';

/**
 * @ngdoc function
 * @name listRepoApp.controller:RepodetailsCtrl
 * @description
 * # RepodetailsCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp')
  .controller('RepodetailsCtrl', function ($scope, $routeParams, GitHubRepo) {
    $scope.repo = GitHubRepo.get({ repo: $routeParams.repo });
  });

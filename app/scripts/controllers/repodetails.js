'use strict';

/**
 * @ngdoc function
 * @name listRepoApp.controller:RepodetailsCtrl
 * @description
 * # RepodetailsCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp')
  .controller('RepodetailsCtrl', function ($scope, $routeParams, GitHubRepo, GITHUB_USERNAME) {
    $scope.repo = GitHubRepo.get({ repo: $routeParams.repo, user: GITHUB_USERNAME });
  });

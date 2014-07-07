'use strict';

/**
 * @ngdoc Main view that lists all repositories.
 * @name listRepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp')
  .controller('MainCtrl', function ($scope, GitHubRepos, GITHUB_USERNAME) {
    $scope.repos = GitHubRepos.all({ user: GITHUB_USERNAME });
  });

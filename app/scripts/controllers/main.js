'use strict';

/**
 * @ngdoc function
 * @name listRepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp')
  .controller('MainCtrl', function ($scope, GitHubRepos, GITHUB_USERNAME) {
    $scope.respos = GitHubRepos.all({ user: GITHUB_USERNAME });
  });

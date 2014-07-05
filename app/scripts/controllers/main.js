'use strict';

/**
 * @ngdoc function
 * @name listRepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp')
  .controller('MainCtrl', function ($scope, GitHubRepos) {
    $scope.respos = GitHubRepos.all();
  });

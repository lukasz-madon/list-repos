'use strict';
/**
 * @ngdoc overview
 * @name listRepoApp
 * @description
 * # listRepoApp
 *
 * Main module of the application.
 */
angular.module('listRepoApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'angularMoment',
  'angular-loading-bar'
]).constant('GITHUB_USERNAME', 'lukasz-madon').config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/repo-details/:repo', {
      templateUrl: 'views/repodetails.html',
      controller: 'RepodetailsCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]).controller('BodyCtrl', [
  '$scope',
  'GitHubUser',
  'GITHUB_USERNAME',
  function ($scope, GitHubUser, GITHUB_USERNAME) {
    $scope.user = GitHubUser.get({ user: GITHUB_USERNAME });
  }
]);
'use strict';
/**
 * @ngdoc Main view that lists all repositories.
 * @name listRepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp').controller('MainCtrl', [
  '$scope',
  'GitHubRepos',
  'GITHUB_USERNAME',
  function ($scope, GitHubRepos, GITHUB_USERNAME) {
    $scope.repos = GitHubRepos.all({ user: GITHUB_USERNAME });
  }
]);
'use strict';
/**
 * @ngdoc Services for GitHub API
 * @name listRepoApp.GitHubRepos
 * @description
 * # GitHubRepos
 * Service in the listRepoApp.
 */
angular.module('listRepoApp').factory('GitHubRepos', [
  '$resource',
  function ($resource) {
    return $resource('https://api.github.com/users/:user/repos?per_page=100&callback=JSON_CALLBACK', {}, { all: { method: 'JSONP' } });
  }
]).factory('GitHubUser', [
  '$resource',
  function ($resource) {
    return $resource('https://api.github.com/users/:user?callback=JSON_CALLBACK', {}, { get: { method: 'JSONP' } });
  }
]).factory('GitHubRepo', [
  '$resource',
  function ($resource) {
    return $resource('https://api.github.com/repos/:user/:repo?callback=JSON_CALLBACK', {}, { get: { method: 'JSONP' } });
  }
]);
'use strict';
/**
 * @ngdoc Detailed information about given repository.
 * @name listRepoApp.controller:RepodetailsCtrl
 * @description
 * # RepodetailsCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp').controller('RepodetailsCtrl', [
  '$scope',
  '$routeParams',
  'GitHubRepo',
  'GITHUB_USERNAME',
  function ($scope, $routeParams, GitHubRepo, GITHUB_USERNAME) {
    $scope.repo = GitHubRepo.get({
      repo: $routeParams.repo,
      user: GITHUB_USERNAME
    });
  }
]);
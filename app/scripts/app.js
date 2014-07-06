'use strict';

/**
 * @ngdoc overview
 * @name listRepoApp
 * @description
 * # listRepoApp
 *
 * Main module of the application.
 */
angular
  .module('listRepoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'angular-loading-bar'
  ])
  .constant('GITHUB_USERNAME', 'lukasz-madon')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/repo-details/:repo', {
        templateUrl: 'views/repodetails.html',
        controller: 'RepodetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('BodyCtrl', function ($scope, GitHubUser, GITHUB_USERNAME) {
    $scope.user = GitHubUser.get({ user: GITHUB_USERNAME });
  });

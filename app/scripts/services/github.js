'use strict';

/**
 * @ngdoc service
 * @name listRepoApp.GitHubRepos
 * @description
 * # GitHubRepos
 * Service in the listRepoApp.
 */
angular.module('listRepoApp')
.factory('GitHubRepos', function($resource) {
    return $resource('https://api.github.com/users/lukasz-madon/repos?callback=JSON_CALLBACK', {}, {
      all: {
        method: 'JSONP'
      }
    });
  })
.factory('GitHubUser', function($resource) {
    return $resource('https://api.github.com/users/lukasz-madon?callback=JSON_CALLBACK', {}, {
      get: {
        method: 'JSONP'
      }
    });
  });

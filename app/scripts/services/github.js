'use strict';

/**
 * @ngdoc Services for GitHub API
 * @name listRepoApp.GitHubRepos
 * @description
 * # GitHubRepos
 * Service in the listRepoApp.
 */
angular.module('listRepoApp')
.factory('GitHubRepos', function($resource) {
    return $resource('https://api.github.com/users/:user/repos?per_page=100&callback=JSON_CALLBACK', {}, {
      all: {
        method: 'JSONP'
      }
    });
  })
.factory('GitHubUser', function($resource) {
    return $resource('https://api.github.com/users/:user?callback=JSON_CALLBACK', {}, {
      get: {
        method: 'JSONP'
      }
    });
  })
.factory('GitHubRepo', function($resource) {
    return $resource('https://api.github.com/repos/:user/:repo?callback=JSON_CALLBACK', {}, {
      get: {
        method: 'JSONP'
      }
    });
  });

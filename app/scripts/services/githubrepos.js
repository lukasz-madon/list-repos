'use strict';

/**
 * @ngdoc service
 * @name listRepoApp.Githubrepos
 * @description
 * # Githubrepos
 * Service in the listRepoApp.
 */
angular.module('listRepoApp')
.factory('Githubrepos', function($resource) {
    return $resource('https://api.github.com/users/lukasz-madon/repos?callback=JSON_CALLBACK', {}, {
      jsonpQuery: {
        method: 'JSONP'
      }
    });
  });

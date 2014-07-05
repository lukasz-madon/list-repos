'use strict';

/**
 * @ngdoc function
 * @name listRepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listRepoApp
 */
angular.module('listRepoApp')
  .controller('MainCtrl', function ($scope, Githubrepos) {
    $scope.respos = [1,2,3];
    console.log('bla');
    console.log(Githubrepos.jsonpQuery());
  });

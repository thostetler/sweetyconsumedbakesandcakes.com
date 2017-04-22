'use strict';

/**
 * @ngdoc overview
 * @name initApp
 * @description
 * # initApp
 *
 * Main module of the application.
 */
angular
  .module('app', [])
  .controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/data.json').then(function (res) {
      var items = [
        'menuItems',
        'flavors',
        'faqs',
        'prices',
        'servingSizes'
      ];
      items.forEach(function (i) {
        $scope[i] = res.data[i];
      });
    });
  }]
);
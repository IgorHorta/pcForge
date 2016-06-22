'use strict';

angular.module('pcForgeApp')
  .config(function($routeProvider) {
    $routeProvider.when('/customize', {
        templateUrl: 'app/customComputer/customize/index.html',
        controller: 'CustomizeController',
        controllerAs: 'cs'
      }).when('/product/:categoryId', {
      	templateUrl: 'app/customComputer/product/list.html',
        controller: 'ProductController',
        controllerAs: 'pc'
      });

  });

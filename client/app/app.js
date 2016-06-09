'use strict';

angular.module('pcForgeApp', ['pcForgeApp.auth', 'pcForgeApp.admin', 'pcForgeApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });

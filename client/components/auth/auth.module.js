'use strict';

angular.module('pcForgeApp.auth', ['pcForgeApp.constants', 'pcForgeApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

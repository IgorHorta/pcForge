'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.productsExamples = [];
    }

    $onInit() {

      this.$http.get('/api/products/examples/list')
        .then(response => {
          this.productsExamples = response.data;
        });
    }
  
  }

  angular.module('pcForgeApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();

'use strict';


class CustomizeController {
  

  constructor($http) {
    this.$http = $http;
    
    this.computer = {
      "processador" : null,
      "placa mãe" : null,
      "placa de vídeo" : null,
      "fonte": null,
      "cooler": null,
      "driver": null,
      "placa de som": null,
      "disco rígido": null,
      "ssd": null
    };
  }
  search(searchTerm,category){
    this.$http.get('/api/products/search/'+searchTerm+'/'+category)
        .then(response => {
          this.searchResult = response.data;
        });
  }

  addItem(product){
    this.computer[product.category] = product;
    this.searchResult = {};
  }


}

angular.module('pcForgeApp')
  .controller('CustomizeController', CustomizeController);

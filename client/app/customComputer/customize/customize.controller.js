'use strict';


class CustomizeController {
  

  constructor($http,Util) {
    this.$http = $http;
    this.Util = Util;
    
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
    this.$http.get('/api/products/search/'+searchTerm+'/'+category+'/'+1)
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

'use strict';


class CustomizeController {
  

  constructor($http,Util) {
    this.$http = $http;
    this.Util = Util;
    
    this.computer = {
      "components":{
        "processador" : null,
        "placa mãe" : null,
        "placa de vídeo" : null,
        "fonte": null,
        "cooler": null,
        "driver": null,
        "placa de som": null,
        "disco rígido": null,
        "ssd": null
      },
      "totalPrice": 0
    };

  }
  
  search(searchTerm,category){
    this.$http.get('/api/products/search/'+searchTerm+'/'+category+'/'+'price'+'/'+'1')
        .then(response => {
          this.searchResult = response.data;
        });
  }

  addItem(product){
    this.computer.components[product.category] = product;
    this.computer.totalPrice += product.price;
    this.searchResult = {};
  }



  calcTotalPercentage(product){
    return (100 * product.price/this.computer.totalPrice).toFixed(2);
  }


}

angular.module('pcForgeApp')
  .controller('CustomizeController', CustomizeController);

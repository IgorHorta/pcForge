'use strict';


class ProductController {
  

  constructor($http,Util,CustomComputerService) {
    this.$http = $http;
    this.Util = Util;
    this.CustomComputerService = CustomComputerService;
    this.search('a','ssd');
  }
  
  search(searchTerm,category){
    this.$http.get('/api/products/search/'+searchTerm+'/'+category+'/'+'price'+'/'+'1')
        .then(response => {
          this.productList = response.data;
        });
  }

  addItem(product){
    this.CustomComputerService.addComponent(product);
  }


  calcTotalPercentage(product){
    if(!product){
      return 0;
    }

    return (100 * product.price/this.computer.totalPrice).toFixed(2);
  }

}

angular.module('pcForgeApp')
  .controller('ProductController', ProductController);

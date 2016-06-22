'use strict';


class ProductController {
  

  constructor($http,Util,CustomComputerService,$routeParams) {
    this.$http = $http;
    this.Util = Util;
    this.CustomComputerService = CustomComputerService;
    this.componentDic = CustomComputerService.getCategoryDic;
    this.categoryId = $routeParams.categoryId;

    this.categoryKey = CustomComputerService.getCategoryById(this.categoryId);
    this.search('a', this.categoryKey);
  }
  
  search(searchTerm,category){
    this.$http.get('/api/products/search/'+searchTerm+'/'+category+'/'+'price'+'/'+'0')
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

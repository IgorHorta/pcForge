'use strict';


class ProductController {
  

  constructor($http,Util,CustomComputerService,$routeParams) {
    this.$http = $http;
    this.Util = Util;
    this.CustomComputerService = CustomComputerService;
    
    this.componentDic = CustomComputerService.getCategoryDic;
    this.categoryId = $routeParams.categoryId;
    this.categoryKey = CustomComputerService.getCategoryById(this.categoryId);
    
    this.cheaper = '1';

    this.totalItems = 64;
    this.currentPage = 4;
    this.maxSize = 6;
    this.numPages = 5;

    this.search('a');
  }
  
  search(searchTerm){
    this.$http.get('/api/products/search/'+searchTerm+'/'+this.categoryKey+'/'+'price'+'/'+this.cheaper)
        .then(response => {
          this.productList = response.data;
        });
  }

  addItem(product){
    this.CustomComputerService.addComponent(product);
  }

  setPage(pageNo) {
    this.currentPage = pageNo;
  }

  pageChanged() {
    console.log('Page changed to: ' + $scope.currentPage);
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

'use strict';


class ProductController {
  

  constructor($http,Util,CustomComputerService,$routeParams,$location) {
    this.$http = $http;
    this.Util = Util;
    this.CustomComputerService = CustomComputerService;
    this.$location = $location;
    
    this.componentDic = CustomComputerService.getCategoryDic;
    this.categoryId = $routeParams.categoryId;
    this.categoryKey = CustomComputerService.getCategoryById(this.categoryId);
    
    this.cheaper = '1';

    this.totalItems = 0;
    this.pages = 0;
    this.currentPage = 1;
    this.maxSize = 20;
    

    this.search('-1');
  }
  
  search(searchTerm){

    if(!searchTerm){
      searchTerm = '-1';
    }

    this.$http.get('/api/products/search/'+searchTerm+'/'+this.categoryKey+'/'
      +'price'+'/'+this.cheaper+'/'+this.currentPage)
        .then(response => {
          
          this.productList = response.data.docs;
          this.totalItems = response.data.total;
          this.currentPage = response.data.page;
          this.pages = response.data.pages;

        });
  }

  addItem(product){
    this.CustomComputerService.addComponent(product);
    this.$location.path("/customize");
  }

  setPage(pageNo) {
    this.currentPage = pageNo;
  }

  pageChanged() {
    pc.search(searchTerm);
  }

}

angular.module('pcForgeApp')
  .controller('ProductController', ProductController);

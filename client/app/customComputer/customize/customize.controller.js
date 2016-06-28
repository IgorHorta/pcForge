'use strict';


class CustomizeController {
  

  constructor($http,Util,CustomComputerService) {
    this.$http = $http;
    this.Util = Util;
    this.CustomComputerService = CustomComputerService;

    this.computer = this.CustomComputerService.loadComputerFromLocalStorage() || this.CustomComputerService.getComputer();
    this.componentDic = this.CustomComputerService.getCategoryDic();
  }

  saveComputer(){
  	this.CustomComputerService.saveComputerInLocalStorage();
  }
}

angular.module('pcForgeApp')
  .controller('CustomizeController', CustomizeController);

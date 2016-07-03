'use strict';


class CustomizeController {
  

  constructor($http,Util,CustomComputerService) {
    this.$http = $http;
    this.Util = Util;
    this.CustomComputerService = CustomComputerService;
    if(this.CustomComputerService.getComputer().totalPrice == 0){
      this.computer = this.CustomComputerService.loadComputerFromLocalStorage() || this.CustomComputerService.getComputer();  
    }else
      this.computer = this.CustomComputerService.getComputer();
    
    this.componentDic = this.CustomComputerService.getCategoryDic();
  }

  saveComputer(){
  	this.CustomComputerService.saveComputerInLocalStorage();
  }

  calcTotalPercentage(product){
        if(!product){
          return 0;
        }
        if(product.price != undefined)
          return (100 * product.price/this.computer.totalPrice).toFixed(2);
        return 0;
	}
}

angular.module('pcForgeApp')
  .controller('CustomizeController', CustomizeController);

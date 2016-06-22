'use strict';


class CustomizeController {
  

  constructor($http,Util,CustomComputerService) {
    this.$http = $http;
    this.Util = Util;
    this.CustomComputerService = CustomComputerService;

    this.computer = this.CustomComputerService.getComputer();
    this.componentDic = this.CustomComputerService.getCategoryDic();

  }

}

angular.module('pcForgeApp')
  .controller('CustomizeController', CustomizeController);

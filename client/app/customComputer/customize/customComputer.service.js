'use strict';

(function() {

  function CustomComputerService($window) {
    
    var componentsCategoryDic = {
      "processador" : 1,
      "placa mãe" : 2,
      "placa de vídeo" : 3,
      "fonte": 4,
      "cooler": 5,
      "driver": 6,
      "placa de som": 7,
      "disco rígido": 8,
      "ssd": 9
    };

    var computer = {
       components:{
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
        totalPrice: 0
      };


    var CustomComputerService = {  
      getComputer(){
        return computer;
      },
      getCategoryDic(){
        return componentsCategoryDic;
      },
    };

    return CustomComputerService;
  }

  angular.module('pcForgeApp')
    .factory('CustomComputerService', CustomComputerService);
})();

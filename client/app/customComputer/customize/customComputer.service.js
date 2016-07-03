'use strict';

(function() {

  function CustomComputerService($window) {
    
    var componentsCategoryDic = {
      "processador" : 1,
      "placa mãe" : 2,
      "placa de vídeo" : 3,
      "fonte": 4,
      "cooler": 5,
     // "driver": 6,
     // "placa de som": 7,
    //  "disco rígido": 8,
      "ssd": 9,
      "memória RAM": 10
    };

    var computer = {
       components:{
          "processador" : null,
          "placa mãe" : null,
          "placa de vídeo" : null,
          "fonte": null,
          "cooler": null,
        //  "driver": null,
       //   "placa de som": null,
        //  "disco rígido": null,
          "ssd": null,
          "memória RAM": null
        },
        totalPrice: 0
      };


    var CustomComputerService = {  
      addComponent(product){
        computer.components[product.category] = product;
        computer.totalPrice += product.price;
      },
      getComputer(){
        return computer;
      },
      getCategoryDic(){
        return componentsCategoryDic;
      },
      getCategoryById(id){
        for (var property in componentsCategoryDic) {
          if (componentsCategoryDic[property] == id) {
            return property;
          }
        }
      },
      saveComputerInLocalStorage(){
        localStorage.custom_computer = angular.toJson(computer);
      },
      loadComputerFromLocalStorage(){
        if(angular.fromJson(localStorage.custom_computer))
          computer = angular.fromJson(localStorage.custom_computer);
        return computer;
      }
    };

    return CustomComputerService;
  }

  angular.module('pcForgeApp')
    .factory('CustomComputerService', CustomComputerService);
})();

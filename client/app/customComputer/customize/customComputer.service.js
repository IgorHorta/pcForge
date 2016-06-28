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
      calcTotalPercentage(category){
        if(!category){
          return 0;
        }
        var product = computer.components[category];  
        if(product && product.price != undefined)
          return (100 * product.price/computer.totalPrice).toFixed(2);
        return 0;
      },
      saveComputerInLocalStorage(){
        localStorage.custom_computer = angular.toJson(computer);
      },
      loadComputerFromLocalStorage(){
        return angular.fromJson(localStorage.custom_computer);
      }
    };

    return CustomComputerService;
  }

  angular.module('pcForgeApp')
    .factory('CustomComputerService', CustomComputerService);
})();

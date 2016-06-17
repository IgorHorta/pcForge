'use strict';

angular.module('pcForgeApp')
  .directive('imageLoaded', function() {
    return {
      restrict: 'A',
        link: function(scope, element, attrs) {
        	console.log("esafsffs");
            element.bind('load', function() {
                console.log("sucesso");
            });
            element.bind('error', function(){
            	console.log("deu zebra");
                element.attr('src', '../../assets/images/yeoman.png'); // set default image
            });
        }
    };
  });

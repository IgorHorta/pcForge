'use strict';

angular.module('pcForgeApp')
  .directive('imageLoaded', function() {
    return {
      restrict: 'A',
        link: function(scope, element, attrs) {
        	if(_.isEmpty(attrs.ngSrc)){
				element.attr('src', '../../assets/images/yeoman.png');
			}

            element.bind('error', function(){
                element.attr('src', '../../assets/images/yeoman.png'); // set default image
            });
        }
    };
  });

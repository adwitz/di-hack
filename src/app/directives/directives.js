'use strict'

angular.module('responsive.directives', [])
  .directive('payWhom', [ function(){
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: '/templates/largeContainer.html',
      link: function ($scope, element, attrs){

      }
    };
}]);

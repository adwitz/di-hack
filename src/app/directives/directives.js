'use strict'

angular.module('responsive.directives', [])
  .directive('largeContainer', [ function(){
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: '/app/templates/largeContainer.html',
      link: function ($scope, element, attrs){

      }
    };
}])
.directive('smallContainer', [function(){
  return {
    restrict: 'EA',
    scope: false,
    templateUrl: '/app/templates/smallContainer.html'
  };
}]);

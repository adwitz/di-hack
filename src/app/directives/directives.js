'use strict'

angular.module('responsive.directives', [])
  .directive('largeBox', [ function(){
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: '/app/templates/largeBox.html',
      link: function ($scope, element, attrs){

      }
    };
}])
.directive('smallBox', [function(){
  return {
    restrict: 'EA',
    scope: false,
    templateUrl: '/app/templates/smallBox.html'
  };
}])
.directive('smallBoxSecondary', [function(){
  return {
    restrict: 'EA',
    scope: false,
    templateUrl: '/app/templates/smallBoxSecondary.html'
  };
}])
.directive('largeContainerLeft', [function(){
  return {
    restrict: 'EA',
    scope: false,
    templateUrl: '/app/templates/largeContainerLeft.html'
  };
}])
.directive('smallContainerRight', [function(){
  return {
    restrict: 'EA',
    scope: false,
    templateUrl: '/app/templates/smallContainerRight.html'
  };
}]);

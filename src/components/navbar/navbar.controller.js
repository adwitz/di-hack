'use strict';

angular.module('responsive')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();

    $scope.bankName = 'Gotham Bank and Trust';

    // $scope.bankName = 'My Little Pony National Bank';
  });

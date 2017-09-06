<!--Logik-->
(function () {
'use strict';

angular.module('myFirstApp', [])

<!--define the ViewModel - binder-->
.controller('MyFirstController', function ($scope) {
  $scope.name = "Wendy";
  $scope.sayHello = function () {
    return "Hello!";
  };
});

})();

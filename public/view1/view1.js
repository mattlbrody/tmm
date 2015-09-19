'use strict';

var app = angular.module('myApp.view1', ['ngRoute', 'uiGmapgoogle-maps'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View1Ctrl', function($scope, position) {
    $scope.$on('mapInitialized', function(event, map) {
      var i = 0;
      map.setCenter()
      position.success(function(data) {
        $scope.user = data;
        $scope.positions = [];
        $scope.icons = [];
        for(i = 0; i < $scope.user.length; i++) {
          $scope.id = $scope.user[i].id
          $scope.icon = $scope.user[i].icon
          $scope.lat = $scope.user[i].coord.latitude
          $scope.lon = $scope.user[i].coord.longitude

          if ($scope.user[i].open == true) {
            function newPosition() {
              $scope.positions.push([$scope.lat, $scope.lon])
              $scope.icons.push($scope.icon)
              console.log($scope.icon)
            }
            newPosition();

            console.log($scope.icons)
          }
        }
      });
  });
})
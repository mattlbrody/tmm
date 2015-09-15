'use strict';

angular.module('myApp.view1', ['ngRoute', 'uiGmapgoogle-maps'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.map = {
      center: {
        latitude: 37.787191,
        longitude: -122.399027
      },
      zoom: 18,
      markers: [ 
      {
        id: '0',
        icon: "http://codifyacademy.com/truckmouth/truckone.png",
        coords: {
          latitude: 37.785991,
          longitude: -122.397328
        } 
      },
      {
        id: '1',
        icon: "http://codifyacademy.com/truckmouth/trucktwo.png",
        coords: {
          latitude: 37.785779,
          longitude: -122.399569
        }
      },
      {
        id: '2',
        icon: "http://codifyacademy.com/truckmouth/truckthree.png",
        coords: {
          latitude: 37.787191,
          longitude: -122.399027
        }
      }]
    }
}])
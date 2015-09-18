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
      map.setCenter()
      //service data goes here
      console.log(position.user)
      $scope.positions =[ [40.71, -74.21], [40.72, -74.20], [40.73, -74.19],
      [40.74, -74.18], [40.75, -74.17], [40.76, -74.16], [40.77, -74.15]];
  });
})

    

    // dpd.users.get(function(users, error) {
    //   users.forEach(function(user) {
    //     id = users.id;
    //     icon = users.icon;
    //     coord = user.coord;
    //   })
    // })


    // var mapOptions = {
    //    zoom: 18,
    //    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //    styles: [
    //       {
    //         "featureType": "poi",
    //         "stylers": [
    //           { "visibility": "off" }
    //         ]
    //       }
    //     ]
    // };

    // var map;

    // function initialize() {

      // if (navigator.geolocation) {
      //      navigator.geolocation.getCurrentPosition(function (position) {
      //          var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //          map.setCenter(initialLocation);
      //      });
      //  }

    //    var image = 'http://ladiesloot.com/wp-content/uploads/2015/05/smiley-face-1-4-15.png';
    //      console.log(image)
    //       var marker = new google.maps.Marker({
    //         position: myLatlng1,
    //         map: map,
    //         title: 'Hello World!'
    //       });
          
    //      marker.setMap(map);
    //   }

    //retrieves geoloacation data
       // options = {
       //    enableHighAccuracy: true,
       //    timeout: 5000,
       //    maximumAge: 0
       //  };

       //  //if successful, store in deployd
       //  function success(pos) {
       //    $scope.latitude = pos.coords.latitude;
       //    $scope.longitude = pos.coords.longitude
       //    $scope.crd = {
       //      latitude,
       //      longitude
       //    };
       //  console.log(latitude)

       //  };
       //  function error(err) {
       //    console.warn('ERROR(' + err.code + '): ' + err.message);
       //  };

       //  navigator.geolocation.getCurrentPosition(success, error);



    // $scope.map = {
    //   center: {
    //     latitude: 37.785991,
    //     longitude: -122.397328
    //   },
    //   zoom: 18,
    //   markers: [ 
    //   {
    //     id: '0',
    //     icon: "http://codifyacademy.com/truckmouth/truckone.png",
    //     coords: {
    //       latitude: 37.785991,
    //       longitude: -122.397328
    //     } 
    //   },
    //   {
    //     id: '1',
    //     icon: "http://codifyacademy.com/truckmouth/trucktwo.png",
    //     coords: {
    //       latitude: 37.785779,
    //       longitude: -122.399569
    //     }
    //   },
    //   {
    //     id: '2',
    //     icon: "http://codifyacademy.com/truckmouth/truckthree.png",
    //     coords: {
    //       latitude: 37.787191,
    //       longitude: -122.399027
    //     }
    //   }]
    // }
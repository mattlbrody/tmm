'use strict';

angular.module('myApp.view1', ['ngRoute', 'uiGmapgoogle-maps'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  
    dpd.users.get(function(users, error) {
      users.forEach(function(user) {
        var id = user.id;
        var icon = user.icon;
        var coord = user.coord;
          console.log(id)
      })
    })

    var map;

    function initialize() {
       var myLatlng1;

       var mapOptions = {
           zoom: 18,
           center: myLatlng1,
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           styles: [
              {
                "featureType": "poi",
                "stylers": [
                  { "visibility": "off" }
                ]
              }
            ]
        };

       var image = 'http://ladiesloot.com/wp-content/uploads/2015/05/smiley-face-1-4-15.png';
        var marker = new google.maps.Marker({
          position: {lat: 37.892729, lng: -122.113632},
          map: map,
          icon: image
        });

       var map = new google.maps.Map(document.getElementById('map'),
       mapOptions);

       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function (position) {
               var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
               map.setCenter(initialLocation);
           });
       }
    }
    initialize();

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
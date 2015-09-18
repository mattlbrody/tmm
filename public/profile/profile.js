'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtrl'
  });
}])

.controller('profileCtrl', [function() {

	//get user data and displays in form
    dpd.users.me(function(user) {
      $('#displayname').val(user.displayname);
      //display image in profile page
      $('#img').attr('src', user.icon);

      // retrieve user id to use in dpd.users.put
      var id = user.id;
      
      //submits form for updates
      $('.form').submit(function() {
        var displayname = $('#displayname').val();
        var icon = $('#base').text()

        //code to connect updates with deployd data and ensure image is not deleted
        if(icon == "") {
          dpd.users.put(id,{displayname: displayname}, function(session, error) {
            if (error) {
              alert(error.message);
            }else {
              alert("info updated")
            }
          })
        }else {
          dpd.users.put(id,{displayname: displayname, icon: icon}, function(session, error) {
            if (error) {
              alert(error.message);
            }else {
              alert("info updated")
            }
          })
        }
      });

      //retrieves geoloacation data
       var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        //if successful, store in deployd
        function success(pos) {
          var latitude = pos.coords.latitude;
          var longitude = pos.coords.longitude
          var crd = {
            latitude,
            longitude
          };

          dpd.users.put(id,{coord: crd}, function(session, error) {
            if (error) {
              alert(error.message);
            }
          })
          console.log('Your current position is:');
          console.log('Latitude : ' + crd.latitude);
          console.log('Longitude: ' + crd.longitude);
        };

        function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);


      //if open is true, then add check to the open checkbox, otherwise no check 
      var updateCheckbox = function() {
        if (user.open) {
          $("input#open").attr('checked', 'checked');
          $("input#open").addClass('btn-success')
        } else {
          $("input#open").addClass('btn-danger')
        }
      };
      updateCheckbox();
    
      $("input#open").change(function() {
        user.open = $(this).is(':checked');
        // Update the property on the server. The callback is optional
        dpd.users.put(user.id, {open: user.open});
      });


      //convert image to base64 so it can be uploaded to the server and displayed on profile page and map
      function readImage(input) {
          if ( input.files && input.files[0] ) {
              var FR= new FileReader();
              FR.onload = function(e) {
                   $('#img').attr( "src", e.target.result );
                   $('#base').text( e.target.result );
              };       
              FR.readAsDataURL( input.files[0] );
          }
      }

      $("#truckicon").change(function(){
          readImage( this );
      });

    });
}]);
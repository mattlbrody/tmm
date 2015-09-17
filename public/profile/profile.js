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
        var username = $('#username').val();
        var displayname = $('#displayname').val();
        var icon = $('#base').text()
        console.log(icon)


        //code to connect updates with deployd data
        dpd.users.put(id,{displayname: displayname, icon: icon}, function(session, error) {
          if (error) {
            alert(error.message);
          }else {
            alert("info updated")
          }
        });
      });

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

      //fileuploader js
      // var files = [];

      // var uploadFiles = function() {

      //     var fd = new FormData()
      //     for (var i in files) {
      //         fd.append("uploadedFile", files[i])
      //     }

      //     var subdir = $('#subdir').val();
      //     var comments = $('#comments').val();
      //     var uniqueFilename = $('#uniqueFilename').prop('checked');
      //     var xhr = new XMLHttpRequest();
      //     xhr.open('POST', '/upload?subdir=' + subdir + '&comments=' + comments + '&uniqueFilename=' + uniqueFilename); 
      //     xhr.onload = function() {
      //         var response = JSON.parse(this.responseText);
      //         console.log(response);
      //         $('.alert-success').append("Upload successful!<br />");
      //         for (var index in response) {
      //            appendUploadedFileToTable(response[index]);
      //         }
      //     };
      //     xhr.onerror = function(err) {
      //         alert("Error: ", err);
      //     }
      //     xhr.send(fd);

      // };

      // var setFiles = function(element) {
      //   console.log('files:', element.files);
      //   // Turn the FileList object into an Array
      //     files = [];
      //     for (var i = 0; i < element.files.length; i++) {
      //       files.push(element.files[i]);
      //     }
      // };  
      // console.log(setFiles)

    });
}]);
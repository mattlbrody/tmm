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
      $('#username').val(user.username);
      $('#displayname').val(user.displayname);
      $('#icon').val(user.icon);

      // retrieve user id to use in dpd.users.put
      var id = user.id;
      
      //submits form for updates
      $('.form').submit(function() {
        var username = $('#username').val();
        var displayname = $('#displayname').val();
        var icon = $('#icon').val();

        //code to connect updates with deployd data
        dpd.users.put(id,{username: username, displayname: displayname, icon: icon}, function(session, error) {
          if (error) {
            alert(error.message);
          } else {
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

      //fileuploader js
      var files = [];

      var uploadFiles = function() {

          var fd = new FormData()
          for (var i in files) {
              fd.append("uploadedFile", files[i])
          }

          var subdir = $('#subdir').val();
          var comments = $('#comments').val();
          var uniqueFilename = $('#uniqueFilename').prop('checked');
          var xhr = new XMLHttpRequest();
          xhr.open('POST', '/upload?subdir=' + subdir + '&comments=' + comments + '&uniqueFilename=' + uniqueFilename); 
          xhr.onload = function() {
              var response = JSON.parse(this.responseText);
              console.log(response);
              $('.alert-success').append("Upload successful!<br />");
              for (var index in response) {
                 appendUploadedFileToTable(response[index]);
              }
          };
          xhr.onerror = function(err) {
              alert("Error: ", err);
          }
          xhr.send(fd);

      };

      var setFiles = function(element) {
        console.log('files:', element.files);
        // Turn the FileList object into an Array
          files = [];
          for (var i = 0; i < element.files.length; i++) {
            files.push(element.files[i]);
          }
      };  
      console.log(setFiles)

    });
}]);
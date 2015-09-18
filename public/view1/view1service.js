app.factory('position', ['$http', function($http) {
  // return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
  //           .success(function(data) {
  //             return data;
  //           })
  //           .error(function(err) {
  //             return err;
  //           });
	return dpd.users.get(function(users, error) {
	      users.forEach(function(user) {
	        id = users.id;
	        icon = users.icon;
	        coord = user.coord;
	      })
	    })
		.success(function(data) {
		      return data;
		    })
		    .error(function(err) {
		      return err;
		 });
}]);
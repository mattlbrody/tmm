app.factory('position', ['$http', function($http) {
  return $http.get('http://localhost:2403/users')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
          })
}]);
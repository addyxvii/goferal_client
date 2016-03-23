var app = angular.module('app',[]);

app.controller('register', function($http, $scope){
  $scope.formModel = {};
  $http.get('http://localhost:3000/api').then(function(data){
    console.log(data)
  })
});

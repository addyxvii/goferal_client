var app = angular.module('app',[]);

app.controller('register', function($scope){
  $scope.formModel = {};
  $http.get('http://localhost:3000/api').then(function(data){
    console.log(data)
  })
});

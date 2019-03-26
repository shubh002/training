var app = angular.module('myApp', []);
 app.controller('countriesContoller', function($scope,$http) {
      
  var url = "countries.json";
  $http.get(url).success( function(response) {
        $scope.countries = response; 
     });
 });


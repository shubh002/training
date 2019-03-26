var app=angular.module('myApp', ['ngRoute']);

app.controller('CandController', ['$scope', 'MyService', '$http', function($scope, myService, $http){

	myService.getData().then(function(candidates){		
		$scope.candidates = candidates;
	})

}]);

app.controller('DisplayDetails',['$scope', 'MyService', '$routeParams', '$http' , function($scope, myService, $routeParams, $http){
	
	var id = parseInt($routeParams.id);
	
	$scope.singleCand = myService.getCandidate(id);

}]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'CandController'
		})
		.when('/viewCandidate/:id',{
			templateUrl: 'viewCandidate.html',
			controller: 'DisplayDetails'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

app.service('MyService', function($http){

	this.data = [];
	
	this.getData = function(){
		return $http({method: 'GET', url: 'http://localhost:3000/candidates', cache: ""}).
        then(function(response) {
		  this.data = response.data;
		  return this.data;
        }.bind(this), function(error) {
			console.log(error);          
      });
	};

	this.getCandidate = function(id){
		return this.data.filter(function(singleCand){
			return singleCand.id === id;
		})[0];
	};

});
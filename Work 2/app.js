var app=angular.module('myApp', ['ngRoute']);

app.controller('CandController', ['$scope', 'MyService', function($scope, myService){

	myService.getData().then(function(candidates){		
		$scope.candidates = candidates;
	})

}]);

app.controller('DisplayDetails',['$scope', 'MyService', '$routeParams', function($scope, myService, $routeParams){
	
	var id = parseInt($routeParams.id);
	
	$scope.singleCand = myService.getCandidate(id);

}]);


app.controller('AddCandidate',['$scope', 'MyService', function($scope, myService){

	$scope.submitCandidate = function () 
	{
			if ($scope.fname != '' && $scope.lname != '' && $scope.regNo != '' && $scope.salary != '') 
			{
					// add candidate
					var rand = myService.randomGenerator();

					var candidate = { fname: $scope.fname, lname: $scope.lname, regNo: $scope.regNo, salary: $scope.salary, imagePath: "/Work 2/images/female.jpg", id: rand };

					myService.addCandidate(candidate);

			}
	}

}]);


app.controller('DeleteCandidate',['$scope', 'MySrvice', function($scope, myservice){

	
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
		.when('/addCandidate', {
			templateUrl: 'addCandidate.html',
			controller: 'AddCandidate'
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

	this.addCandidate = function(candidate, $http) {
		$http({
			url: 'http://localhost:3000/candidates',
			method: "POST",
			data: candidate,
	}).success(function (data) {
					$scope.candidates = data;
			}).error(function (status) {
					$scope.status = status;
			});
	};

	this.randomGenerator = function(){
		var max=999;
		var min=10;
		var random = Math.floor(Math.random() * (+max - +min)) + +min;
		return random;
	};


	this.getCandidate = function(id){
		return this.data.filter(function(singleCand){
			return singleCand.id === id;
		})[0];
	};

	this.removeCandidate = function($http){
		$http({
			url: 'http://localhost:3000/candidates',
			method: "DELETE",
			data: candidate,
		}).success(function (data) {
					$scope.candidates = data;
			}).error(function (status) {
					$scope.status = status;
			});

	};


});
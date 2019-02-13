var app=angular.module('myApp', ['ngRoute']);

app.controller('MyController', ['$scope', 'MyService', '$location',function($scope, myService, $location){
	
	console.log(myService.getData());

	$scope.candidates = myService.getData();

	$index=0;

	$scope.retIndex = function(){
		return $index;
	};

	$scope.showCandidateDetail = function(candidate){
		$location.path('/viewCandidate/' +  candidate.fname);
	}
}]);


app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'MyController'
		})
		.when('/viewCandidate/:name',{
			templateUrl: 'viewCandidate.html',
			controller: 'MyController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

app.service('MyService', function(){

	this.data = [
		{
			fname: 'Shubham',
			lname: 'Verma',
			salary: 5000,
			regno: 47600123,
			imagePath: '/images/img1.jpg'

		},
		{
			fname: 'Anukool',
			lname: 'Srivastava',
			salary: 6000,
			regno: 48000123,
			imagePath: '/Work1/images/img1.jpg'
		},
		{
			fname: 'Harshit',
			lname: 'Gupta',
			salary: 8000,
			regno: 53600123,
			imagePath: '/images/img1.jpg'
		},
		{
			fname: 'Yash',
			lname: 'Mittal',
			salary: 4500,
			regno: 46000123,
			imagePath: '/images/img1.jpg'
		},
		{
			fname: 'Kushal',
			lname: 'Gupta',
			salary: 5500,
			regno: 43000123,
			imagePath: '/images/img1.jpg'
		}
	];
	
	var cand={};
	this.getData = function(cand){
		return this.data;
	};

});
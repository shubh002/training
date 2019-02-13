var app=angular.module('myApp', ['ngRoute']);

app.controller('CandController', ['$scope', 'MyService',function($scope, myService){
	
	console.log(myService.getData());

	$scope.candidates = myService.getData();

	$scope.index=0;

}]);

app.controller('DisplayDetails',['$scope', 'MyService',function($scope, myService){
	$scope.candidates = myService.getData();

	$scope.showCandidateDetail = function($candidate){
			return $candidate;
	};

}]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'CandController'
		})
		.when('/viewCandidate/:name',{
			templateUrl: 'viewCandidate.html',
			controller: 'DisplayDetails'
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
			imagePath: '/Work1/images/male.jpg'

		},
		{
			fname: 'Anukool',
			lname: 'Srivastava',
			salary: 6000,
			regno: 48000123,
			imagePath: '/Work1/images/male.jpg'
		},
		{
			fname: 'Surabhi',
			lname: 'Sethi',
			salary: 5000,
			regno: 42000123,
			imagePath: '/Work1/images/female.jpg'
		},
		{
			fname: 'Harshit',
			lname: 'Gupta',
			salary: 8000,
			regno: 53600123,
			imagePath: '/Work1/images/male.jpg'
		},
		{
			fname: 'Archana',
			lname: 'Nair',
			salary: 7500,
			regno: 44700123,
			imagePath: '/Work1/images/female.jpg'
		},
		{
			fname: 'Yash',
			lname: 'Mittal',
			salary: 4500,
			regno: 46000123,
			imagePath: '/Work1/images/male.jpg'
		},
		{
			fname: 'Kushal',
			lname: 'Gupta',
			salary: 5500,
			regno: 43000123,
			imagePath: '/Work1/images/male.jpg'
		}
	];
	
	this.getData = function(){
		return this.data;
	};

});
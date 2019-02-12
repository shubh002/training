var app=angular.module('myApp', ['ngRoute']);

app.controller('MyController', ['$scope', 'MyService',function($scope, myService){
	
	console.log(myService.getData());

	$scope.candidates = myService.getData();

	
}]);


app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'getData'
		})
		.when('/viewCandidate',{
			templateUrl: 'viewCandidate.html',
			controller: 'getData'
		})
		.

});

app.service('MyService', function(){

	this.data = [
		{
			fname: 'Shubham',
			lname: 'Verma',
			salary: 5000,
			regno: 47600123
		},
		{
			fname: 'Anukool',
			lname: 'Srivastava',
			salary: 6000,
			regno: 48000123
		},
		{
			fname: 'Harshit',
			lname: 'Gupta',
			salary: 8000,
			regno: 53600123
		},
		{
			fname: 'Yash',
			lname: 'Mittal',
			salary: 4500,
			regno: 46000123
		},
		{
			fname: 'Kushal',
			lname: 'Gupta',
			salary: 5500,
			regno: 43000123
		}
	];
	
	this.getData = function(){
		return this.data;
	};

});
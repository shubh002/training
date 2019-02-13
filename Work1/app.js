var app=angular.module('myApp', ['ngRoute']);

app.controller('MyController', ['$scope', 'MyService', '$location',function($scope, myService, $location){
	
	console.log(myService.getData());

	$scope.candidates = myService.getData();

	$index=0;

	$scope.retIndex = function(){
		return $index;
	};
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
			fname: 'Yash',
			lname: 'Mittal',
			salary: 4500,
			regno: 46000123,
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
			fname: 'Kushal',
			lname: 'Gupta',
			salary: 5500,
			regno: 43000123,
			imagePath: '/Work1/images/male.jpg'
		}
	];
	
	var cand={};
	this.getData = function(cand){
		return this.data;
	};

});
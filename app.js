var app=angular.module('myApp', []);

app.controller('MyController', ['$scope',function($scope){
	$scope.employees = [
	{
		fname: 'Shubham',
		lname: 'Verma',
		salary: 5000,
		reg: 47600123
	},
	{
		fname: 'Anukool',
		lname: 'Srivastava',
		salary: 6000,
		reg: 48000123
	},
	{
		fname: 'Harshit',
		lname: 'Gupta',
		salary: 8000,
		reg: 53600123
	}
	]
}]);
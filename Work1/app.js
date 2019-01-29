var app=angular.module('myApp', []);

app.controller('MyController', ['$scope',function($scope){
	$scope.data = [
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
		salary: 4500,
		regno: 43000123
	}
	]
	$scope.count={};
	$scope.show=!true;
	$scope.toggleshow = function(){
			$scope.show= !$scope.show;
	};
}]);
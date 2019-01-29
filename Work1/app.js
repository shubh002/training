var app=angular.module('myApp', []);

app.controller('MyController', ['$scope',function($scope){
	$scope.data = [
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
	
	$scope.show0=!true;
	$scope.show1=!true;
	$scope.show2=!true;
	$scope.toggleshow0 = function(){
			$scope.show0= !$scope.show0;
	};
	$scope.toggleshow1 = function(){
			$scope.show1= !$scope.show1;
	};
	$scope.toggleshow2 = function(){
			$scope.show2= !$scope.show2;
	};
}]);
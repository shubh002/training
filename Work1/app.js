var app=angular.module('myApp', []);

app.controller('MyController', ['$scope', 'MyService',function($scope, myService){
	
	console.log(myService.getData());

	$scope.candidates = myService.getData();
}]);


app.service('MyService', function(){

	var myObject = {};
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
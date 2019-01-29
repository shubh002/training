var app=angular.module('myApp', []);

app.controller('MyController', ['$scope',function($scope){
	$scope.reviews = [
	{
		comment : 'Could this be more Awesome?',
		by : 'Chandler Bing'
	},
	{
		comment : 'How ya Doin?',
		by : 'Joey Tribianni'
	}
	];
}]);
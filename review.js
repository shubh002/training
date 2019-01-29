var app=angular.module('reviewApp', []);

app.controller('MyController', ['$scope',function($scope){
	
	$scope.form = {};

	$scope.addReview = function(){
		$scope.reviews.push($scope.form);
		$scope.form = {};
	}


	$scope.reviews = [
	{
		comment : 'Could this be more Awesome?',
		by : 'Chandler.Bing@email.com'
	},
	{
		comment : 'How ya Doin?',
		by : 'Joey.Tribianni@email.com'
	}
	];
}]);

app.directive('userinformation',function(){
	return{
			restrict: 'A',
			templateUrl : 'userinfo.html'

	};
});
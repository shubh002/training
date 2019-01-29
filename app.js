var app=angular.module('myApp', []);

app.controller('MyController', ['$scope',function($scope){
	$scope.fname='Shubham';
	$scope.lname='Verma';
	$scope.fullname=function(){
		return $scope.fname + " " + $scope.lname;
	};
	$scope.isSpy=true;
	$scope.codename='shub002';
}]);
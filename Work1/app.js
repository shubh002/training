var app=angular.module('myApp', ['ngRoute']);

app.controller('CandController', ['$scope', 'MyService', function($scope, myService){

	console.log(myService.getData());

	$scope.candidates = myService.getData();
	
	$scope.index=0;

}]);

app.controller('DisplayDetails',['$scope', 'MyService', '$routeParams',function($scope, myService, $routeParams){
	
	$scope.candidates = myService.getData();
	console.log($routeParams.id);

	
	var id = parseInt($routeParams.id);
	
	$scope.singleCand = myService.getCandidate(id);

}]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'CandController'
		})
		.when('/viewCandidate/:id',{
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
			regNo: 47600123,
			imagePath: '/Work1/images/male.jpg',
			id: 1
		},
		{
			fname: 'Anukool',
			lname: 'Srivastava',
			salary: 6000,
			regNo: 48000123,
			imagePath: '/Work1/images/male.jpg',
			id: 2
		},
		{
			fname: 'Surabhi',
			lname: 'Sethi',
			salary: 5000,
			regNo: 42000123,
			imagePath: '/Work1/images/female.jpg',
			id: 3
		},
		{
			fname: 'Harshit',
			lname: 'Gupta',
			salary: 8000,
			regNo: 53600123,
			imagePath: '/Work1/images/male.jpg',
			id: 4
		},
		{
			fname: 'Archana',
			lname: 'Nair',
			salary: 7500,
			regNo: 44700123,
			imagePath: '/Work1/images/female.jpg',
			id: 5
		},
		{
			fname: 'Yash',
			lname: 'Mittal',
			salary: 4500,
			regNo: 46000123,
			imagePath: '/Work1/images/male.jpg',
			id: 6
		},
		{
			fname: 'Kushal',
			lname: 'Gupta',
			salary: 5500,
			regNo: 43000123,
			imagePath: '/Work1/images/male.jpg',
			id: 7
		}
	];
	
	this.getData = function(){
		//
		return this.data;
	};

	this.getCandidate = function(id){
		return this.data.filter(function(singleCand){
			return singleCand.id === id;
		})[0];
	};

});
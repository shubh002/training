var app = angular.module("myApp",[]);
app.controller('cont1',['$scope', 'serv1' , function($scope, serv1){
	$scope.a=10;
	$scope.b=20;
	$scope.doSum = function(){
		serv1.getSum($scope.a,$scope.b, function(r){
			$scope.sum=r;
		});		
	};
}]);

app.service('serv1',['$http','$log', function($http, $log){
	$log.log("Instntiating serv1........")
	this.getSum = function(a,b, cb){
		var s = parseInt(a) + parseInt(b);
		cb(s);
	};
}]);
var app = angular.module("myApp",[]);
app.controller('cont1',['$scope', 'serv1' , function($scope, serv1){
	$scope.a=10;
	$scope.b=20;
	$scope.doSum = function(){
		//$scope.sum=serv1.getSum($scope.a,$scope.b);
		serv1.getSum($scope.a,$scope.b,function(r){  //Callback Function
			$scope.sum=r;
		}); 
			
	};
}]);

app.factory('serv1',['$http','$log', function($http, $log){
	$log.log("Instntiating serv1........")
	var oserv1 = {};
	//oserv1.getSum = function(a,b){
	//	return parseInt(a)+parseInt(b);
	//};
	oserv1.getSum = function(a,b,cb){
		var s = parseInt(a) + parseInt(b);
		cb(s);
	};
	return oserv1;
}]);
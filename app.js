var ngClassExample = angular.module('ngClassExample', []);

ngClassExample.controller('mainController', ['$scope', function($scope) {
	
	$scope.message = "Hello world!";
	
	$scope.items = [
		{
			name : 'terminal',
			description : 'flickery',
			interact : 'true'
		},
		{
			name : 'robot',
			description : 'lame',
			interaction : false
		},
		{
			name : 'medical kit',
			description : 'clean',
			interaction : true
		}
	];
}]);

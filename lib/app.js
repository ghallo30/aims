var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: 'pages/login.html',
		controller: 'loginCtrl'
	}).
	when('/Home/:firstname/:middlename/:lastname/:position/:department', {
		templateUrl: 'pages/dashboard.html'
	}).
	otherwise({
		redirectTo: '/login'
	});
}]);
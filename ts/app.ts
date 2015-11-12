/// <reference path="../typings/angularjs/angular" />
/// <reference path="../typings/angular-ui-router/angular-ui-router" />
/// <reference path="../typings/jquery/jquery" />

let app = angular.module('PageApp', ['ui.router', 'ngMaterial']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('Home', {
			url: '/',
			templateUrl: '/views/home/home.html',
			controller: 'HomeController'
		});
	
	$urlRouterProvider.otherwise('/');
}]);
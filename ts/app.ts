/// <reference path="../typings/angularjs/angular" />
/// <reference path="../typings/angular-ui-router/angular-ui-router" />
/// <reference path="../typings/jquery/jquery" />

let app = angular.module('PageApp', ['ui.router', 'ngMaterial']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider: any, $urlRouterProvider: any, $locationProvider: any) {
	$stateProvider
		.state('Home', {
			url: '/',
			templateUrl: '/templates/home/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});
	
	$urlRouterProvider.otherwise('/');
	
	 $locationProvider.html5Mode(true);
}]);
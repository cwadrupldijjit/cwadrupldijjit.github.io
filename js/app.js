/// <reference path="../typings/angularjs/angular" />
/// <reference path="../typings/angular-ui-router/angular-ui-router" />
/// <reference path="../typings/jquery/jquery" />
var app = angular.module('PageApp', ['ui.router', 'ngMaterial']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('Home', {
            url: '/',
            templateUrl: '/templates/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
    }]);
/// <reference path="../app" />
app.controller('HomeController', [function () {
    }]);
/// <reference path="../app" />
app.controller('MainController', ['$location', '$scope', function ($location, $scope) {
        var vm = this;
        vm.menuFixed = false;
        angular.element(window).scroll(function () {
            if (angular.element(this).scrollTop() > 100) {
                vm.menuFixed = true;
                $scope.$apply();
            }
            else {
                vm.menuFixed = false;
                $scope.$apply();
            }
        });
    }]);

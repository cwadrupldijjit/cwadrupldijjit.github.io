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
        $locationProvider.html5Mode(true);
    }]);
/// <reference path="../app" />
app.controller('HomeController', [function () {
    }]);
/// <reference path="../app" />
app.controller('MainController', ['$location', '$scope', 'MobileService', function ($location, $scope, MobileService) {
        var vm = this;
        vm.menuFixed = false;
        vm.isMobile = !!MobileService.isMobile.any();
        // angular.element(window).scroll(function() {
        // 	if (angular.element(this).scrollTop() > 100) {
        // 		vm.menuFixed = true;
        // 		$scope.$apply();
        // 	} else {
        // 		vm.menuFixed = false;
        // 		$scope.$apply();
        // 	}
        // });
    }]);
/// <reference path="../app" />
app.service('MobileService', [function () {
        var svc = this;
        svc.isMobile = {
            Android: function () { return !!navigator.userAgent.match(/Android/i); },
            iOS: function () { return !!navigator.userAgent.match(/iPad|iPhone|iPod/i); },
            BlackBerry: function () { return !!navigator.userAgent.match(/Blackberry|BB10|Tablet|Mobile/i); },
            Opera: function () { return !!navigator.userAgent.match(/Opera Mini/i); },
            Windows: function () { return !!navigator.userAgent.match(/IEMobile/i); },
            any: function () {
                return (this.Android() || this.iOS() || this.BlackBerry() || this.Opera() || this.Windows());
            }
        };
    }]);

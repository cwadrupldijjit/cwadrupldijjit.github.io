/// <reference path="../app" />

app.controller('MainController', ['$location', '$scope', 'MobileService', function($location: any, $scope: any, MobileService: any) {
	let vm = this;
	
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
/// <reference path="../app" />

app.controller('MainController', ['$location', '$scope', function($location: any, $scope: any) {
	let vm = this;
	
	vm.menuFixed = false;
	
	angular.element(window).scroll(function() {
		if (angular.element(this).scrollTop() > 100) {
			vm.menuFixed = true;
			$scope.$apply();
		} else {
			vm.menuFixed = false;
			$scope.$apply();
		}
	});
}]);
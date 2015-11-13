/// <reference path="../app" />

app.service('MobileService', [function() {
	let svc = this;
	
	svc.isMobile = {
		Android() { return !!navigator.userAgent.match(/Android/i) },
		iOS() { return !!navigator.userAgent.match(/iPad|iPhone|iPod/i) },
		BlackBerry() { return !!navigator.userAgent.match(/Blackberry|BB10|Tablet|Mobile/i) },
		Opera() { return !!navigator.userAgent.match(/Opera Mini/i) },
		Windows() { return !!navigator.userAgent.match(/IEMobile/i) },
		any() {
			return (this.Android() || this.iOS() || this.BlackBerry() || this.Opera() || this.Windows())
		}
	};
}]);
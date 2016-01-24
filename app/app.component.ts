import { Component,
		 View } from 'angular2/core';
import { COMMON_DIRECTIVES,
		 CORE_DIRECTIVES } from 'angular2/common';
import { RouteConfig,
		 ROUTER_DIRECTIVES,
		 ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './components/home/home.component';
import { TsParallaxComponent } from './components/ts-parallax/ts-parallax.component';

@Component({
	selector: 'app',
	providers: [
		ROUTER_PROVIDERS
	]
})
@View({
	templateUrl : `app/app.html`,
	directives: [
		ROUTER_DIRECTIVES,
		CORE_DIRECTIVES,
		COMMON_DIRECTIVES
	]
})
@RouteConfig([
	{ path: '/ng2-parallax/', 			 component: HomeComponent, 		 as: 'Home' },
	{ path: '/ng2-parallax/ts-parallax', component: TsParallaxComponent, as: 'TS-Parallax'}
])

class AppComponent {
	
}

export { AppComponent };
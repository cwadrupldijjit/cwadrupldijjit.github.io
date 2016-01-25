import { Component,
		 View } from 'angular2/core';
import { COMMON_DIRECTIVES,
		 CORE_DIRECTIVES } from 'angular2/common';
import { RouteConfig,
		 ROUTER_DIRECTIVES,
		 ROUTER_PROVIDERS } from 'angular2/router';
import { HomeAppComponent } from './subpages/home/components/home-app/home.app.component';
import { ParallaxApp } from './subpages/ng2-parallax/components/parallax-app/parallax.app.component';

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
	{ path: '/...',				 component: HomeAppComponent, as: 'Home'},
	{ path: '/ng2-parallax/...', component: ParallaxApp,	  as: 'ng2-parallax' }
])

class AppComponent {
	
}

export { AppComponent };
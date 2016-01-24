import { Component,
		 View } from 'angular2/core';
import { COMMON_DIRECTIVES,
		 CORE_DIRECTIVES } from 'angular2/common';
import { RouteConfig,
		 ROUTER_DIRECTIVES,
		 ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './subpages/home/home.component';
import { ng2ParallaxMain } from './subpages/ng2-parallax/components/ng2-parallax-main/ng2-parallax-main.component';

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
	{ path: '/', 				 component: HomeComponent,		 as: 'Home'},
	{ path: '/ng2-parallax/...', component: ng2ParallaxMain,	 as: 'ng2-parallax' }
])

class AppComponent {
	
}

export { AppComponent };